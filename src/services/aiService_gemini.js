export class GeminiProvider {
    constructor(config) {
        this.config = config;
        this.apiKey = this.revealKey(config.obfuscatedKey) || import.meta.env.VITE_GEMINI_API_KEY;
    }

    revealKey(obfuscatedKey) {
        if (!obfuscatedKey) return '';
        try {
            // Base64 decode + reverse
            return atob(obfuscatedKey).split('').reverse().join('');
        } catch (e) {
            console.error("Failed to de-obfuscate key", e);
            return '';
        }
    }

    async *chatStream(messages, systemPrompt) {
        if (!this.apiKey) {
            yield "Check console. API Key missing.";
            console.error("Gemini API Key is missing.");
            return;
        }

        // Gemini REST API format
        const contents = messages.map(msg => ({
            role: msg.role === 'ai' ? 'model' : 'user',
            parts: [{ text: msg.text }]
        }));

        const requestBody = {
            contents: contents,
            system_instruction: {
                parts: [{ text: systemPrompt }]
            },
            generationConfig: {
                maxOutputTokens: 1000,
            }
        };

        const response = await fetch(`${this.config.apiUrl}?key=${this.apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Gemini API Error: ${response.status} - ${err}`);
        }

        const json = await response.json();
        const text = json.candidates?.[0]?.content?.parts?.[0]?.text;

        if (text) {
            yield text;
        } else {
            console.warn("Gemini response missing text", json);
            yield "No response from AI.";
        }
    }
}
