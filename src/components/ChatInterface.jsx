import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

import systemPromptRaw from '../data/system_prompt.txt?raw';
import contextRaw from '../data/chatbotcontext.dat?raw';

const ChatInterface = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { role: 'ai', text: "Greetings! I am nMaD. Ask me anything about Raul's experience." }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Context loaded at compile time
    const [aiConfig] = useState({
        prompt: systemPromptRaw,
        context: contextRaw
    });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        // RATE LIMIT CHECK
        const { getAIProvider } = await import('../services/aiService'); // Lazy import service
        const { rateLimitService } = await import('../services/rateLimitService');

        const limitCheck = rateLimitService.checkLimits();
        if (!limitCheck.allowed) {
            setMessages(prev => [
                ...prev,
                { role: 'user', text: input }, // Show user message
                { role: 'ai', text: `SYSTEM: ${limitCheck.error}` } // Show system error as AI message
            ]);
            setInput('');
            return;
        }

        const userMsgText = input;

        // Update UI: Add User Message + Empty AI Placeholder immediately
        setMessages(prev => [
            ...prev,
            { role: 'user', text: userMsgText },
            { role: 'ai', text: '' }
        ]);

        setInput('');
        setLoading(true);

        // Count usage attempt (or should we count only success? usually attempt to stop spam)
        // Let's count it now to prevent spamming the API with errors
        rateLimitService.incrementUsage();

        try {
            // Get the AI provider (defaulting to configured preference in aiService.js)
            const aiService = getAIProvider();

            const fullSystemPrompt = `${aiConfig.prompt}\n\nCONTEXT:\n${aiConfig.context}`;
            const historyExcludingCurrent = messages; // The current user message is passed separately in some providers, but here we just need history

            // Reconstruct full message history including the new user message for the API
            const fullHistory = [...historyExcludingCurrent, { role: 'user', text: userMsgText }];

            const responseStream = aiService.chatStream(fullHistory, fullSystemPrompt);

            let fullText = '';

            for await (const chunk of responseStream) {
                fullText += chunk;

                setMessages(prev => {
                    const updated = [...prev];
                    const lastIndex = updated.length - 1;
                    if (updated[lastIndex].role === 'ai') {
                        updated[lastIndex] = { ...updated[lastIndex], text: fullText };
                    }
                    return updated;
                });
            }

        } catch (error) {
            console.error("AI Error:", error);
            setMessages(prev => {
                const updated = [...prev];
                const lastIndex = updated.length - 1;
                if (updated[lastIndex].role === 'ai') {
                    updated[lastIndex] = { ...updated[lastIndex], text: `ERR: ${error.message || "Connection instability"}` };
                }
                return updated;
            });
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: 'min(350px, 90vw)',
            height: 'min(500px, 80vh)',
            background: 'var(--hero-overlay-solid)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--accent-cyan)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10000,
            boxShadow: '0 0 20px rgba(102, 252, 241, 0.2)',
            fontFamily: "'Consolas', monospace"
        }}>
            {/* Header */}
            <div style={{
                padding: '15px',
                borderBottom: '1px solid var(--accent-teal)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'var(--bg-surface)',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '10px', height: '10px', background: 'var(--accent-cyan)', borderRadius: '50%', marginRight: '10px', boxShadow: '0 0 5px var(--accent-cyan)' }}></div>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>nMaD_AI_LINK</span>
                </div>
                <button
                    onClick={onClose}
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'var(--accent-cyan)',
                        cursor: 'pointer',
                        fontSize: '16px',
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255, 0, 80, 0.5)'; e.currentTarget.style.borderColor = '#ff0050'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; }}
                >
                    &times;
                </button>
            </div>

            {/* Messages */}
            <div style={{
                flex: 1,
                padding: '15px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                color: 'var(--text-primary)'
            }}>
                {messages.map((msg, i) => (
                    <div key={i} style={{
                        alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                        maxWidth: '85%',
                        padding: '10px',
                        background: msg.role === 'user' ? 'var(--accent-teal)33' : 'var(--bg-surface)',
                        border: msg.role === 'user' ? '1px solid var(--accent-cyan)' : '1px solid var(--accent-teal)',
                        borderRadius: '5px',
                        fontSize: '0.9em'
                    }}>
                        <span style={{ color: msg.role === 'ai' ? 'var(--accent-cyan)' : 'var(--text-primary)', fontWeight: 'bold', fontSize: '0.8em', display: 'block', marginBottom: '5px' }}>
                            {msg.role === 'user' ? 'USER' : 'nMaD'}
                        </span>
                        <div style={{ lineHeight: '1.4' }}>
                            <ReactMarkdown
                                components={{
                                    a: ({ node, ...props }) => <a style={{ color: msg.role === 'ai' ? 'var(--text-heading)' : 'var(--accent-cyan)', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" {...props} />,
                                    p: ({ node, ...props }) => <p style={{ margin: '0 0 10px 0' }} {...props} />,
                                    ul: ({ node, ...props }) => <ul style={{ paddingLeft: '20px', margin: '0 0 10px 0' }} {...props} />,
                                    li: ({ node, ...props }) => <li style={{ marginBottom: '5px' }} {...props} />,
                                    code: ({ node, ...props }) => <code style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '2px 4px', borderRadius: '3px', fontFamily: 'monospace' }} {...props} />
                                }}
                            >
                                {msg.text}
                            </ReactMarkdown>
                        </div>
                    </div>
                ))}
                {loading && (
                    <div style={{ alignSelf: 'flex-start', color: 'var(--accent-cyan)', fontSize: '0.8em', fontStyle: 'italic' }}>
                        Processing...
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} style={{
                padding: '15px',
                borderTop: '1px solid rgba(102, 252, 241, 0.3)',
                display: 'flex',
                gap: '10px'
            }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Query Protocol..."
                    style={{
                        flex: 1,
                        background: 'var(--bg-void)',
                        border: '1px solid var(--accent-teal)',
                        color: 'var(--text-primary)',
                        padding: '8px',
                        borderRadius: '4px',
                        outline: 'none',
                        fontFamily: "'Consolas', monospace"
                    }}
                />
                <button type="submit" style={{
                    background: 'var(--accent-teal)',
                    color: 'var(--bg-void)',
                    border: 'none',
                    padding: '0 15px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontFamily: "'Consolas', monospace"
                }}>
                    SEND
                </button>
            </form>
        </div>
    );
};

export default ChatInterface;
