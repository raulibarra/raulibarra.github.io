import { puter } from '@heyputer/puter.js';

export class PuterProvider {
    constructor(config) {
        this.config = config;
    }

    async *chatStream(messages, systemPrompt) {
        // Construct messages for Puter
        const apiMessages = [
            { role: 'system', content: systemPrompt },
            ...messages.map(m => ({
                role: m.role === 'ai' ? 'assistant' : 'user',
                content: m.text
            }))
        ];

        const response = await puter.ai.chat(apiMessages, {
            model: this.config?.model || 'gemini-1.5-flash',
            stream: true
        });

        for await (const part of response) {
            yield part?.text || '';
        }
    }
}
