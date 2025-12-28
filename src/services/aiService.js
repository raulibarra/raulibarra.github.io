import config from '../config.json';
import { PuterProvider } from './aiService_puter';
import { GeminiProvider } from './aiService_gemini';

// Helper: Text Encoder for obfuscation (You can run this in console to generate your key)
export const obfuscateKey = (plainKey) => {
    if (!plainKey) return '';
    return btoa(plainKey.split('').reverse().join(''));
};

export const revealKeyForUser = () => {
    // This is for the user to be able to generate their key string easily in console
    console.log("To obfuscate your key, run: `import { obfuscateKey } from './services/aiService'; console.log(obfuscateKey('YOUR_KEY'))`");
};

export const getAIProvider = (providerName) => {
    // Priority: Explicit Argument > Config.json Preference > Default 'puter'
    const name = providerName || config.ai.preferredProvider || 'puter';

    switch (name.toLowerCase()) {
        case 'gemini':
            return new GeminiProvider(config.ai.gemini);
        case 'puter':
        default:
            return new PuterProvider(config.ai.puter);
    }
};
