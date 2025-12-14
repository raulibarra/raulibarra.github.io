import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { puter } from '@heyputer/puter.js';
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

        const userMsgText = input;

        // Prepare history for API (current history + new user message)
        const historyForApi = [...messages, { role: 'user', text: userMsgText }];

        // Update UI: Add User Message + Empty AI Placeholder immediately
        setMessages(prev => [
            ...prev,
            { role: 'user', text: userMsgText },
            { role: 'ai', text: '' }
        ]);

        setInput('');
        setLoading(true);

        try {
            // Construct messages array for Puter API
            const apiMessages = [
                {
                    role: 'system',
                    content: `${aiConfig.prompt}\n\nCONTEXT:\n${aiConfig.context}`
                }
            ];

            // Map message history
            historyForApi.forEach(msg => {
                apiMessages.push({
                    role: msg.role === 'ai' ? 'assistant' : 'user',
                    content: msg.text
                });
            });

            // Call Puter.js with streaming enabled
            const response = await puter.ai.chat(apiMessages, {
                model: 'gemini-2.5-flash',
                stream: true
            });

            let fullText = '';

            // Process the stream
            for await (const part of response) {
                const chunk = part?.text || '';
                fullText += chunk;

                // Update the last message (AI placeholder) with accumulated text
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
            // Update placeholder with error
            setMessages(prev => {
                const updated = [...prev];
                const lastIndex = updated.length - 1;
                if (updated[lastIndex].role === 'ai') {
                    updated[lastIndex] = { ...updated[lastIndex], text: "ERR: Connection instability. Please try again." };
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
            background: 'rgba(11, 12, 16, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid #66FCF1',
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
                borderBottom: '1px solid rgba(102, 252, 241, 0.3)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(31, 40, 51, 0.5)',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '10px', height: '10px', background: '#66FCF1', borderRadius: '50%', marginRight: '10px', boxShadow: '0 0 5px #66FCF1' }}></div>
                    <span style={{ color: '#66FCF1', fontWeight: 'bold' }}>nMaD_AI_LINK</span>
                </div>
                <button
                    onClick={onClose}
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#66FCF1',
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
                color: '#fff'
            }}>
                {messages.map((msg, i) => (
                    <div key={i} style={{
                        alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                        maxWidth: '85%',
                        padding: '10px',
                        background: msg.role === 'user' ? 'rgba(102, 252, 241, 0.1)' : 'rgba(197, 198, 199, 0.1)',
                        border: msg.role === 'user' ? '1px solid rgba(102, 252, 241, 0.3)' : '1px solid rgba(197, 198, 199, 0.3)',
                        borderRadius: '5px',
                        fontSize: '0.9em'
                    }}>
                        <span style={{ color: msg.role === 'ai' ? '#66FCF1' : '#C5C6C7', fontWeight: 'bold', fontSize: '0.8em', display: 'block', marginBottom: '5px' }}>
                            {msg.role === 'user' ? 'USER' : 'nMaD'}
                        </span>
                        <div style={{ lineHeight: '1.4' }}>
                            <ReactMarkdown
                                components={{
                                    a: ({ node, ...props }) => <a style={{ color: msg.role === 'ai' ? '#fff' : '#66FCF1', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" {...props} />,
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
                    <div style={{ alignSelf: 'flex-start', color: '#66FCF1', fontSize: '0.8em', fontStyle: 'italic' }}>
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
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid #45A29E',
                        color: '#fff',
                        padding: '8px',
                        borderRadius: '4px',
                        outline: 'none',
                        fontFamily: "'Consolas', monospace"
                    }}
                />
                <button type="submit" style={{
                    background: '#45A29E',
                    color: '#0b0c10',
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
