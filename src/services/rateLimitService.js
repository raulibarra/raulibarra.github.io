import config from '../config.json';
// rateLimitService.js
// Handles client-side rate limiting (cooldowns and daily limits)

const STORAGE_KEY = 'chat_daily_usage';

const getUsageData = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : { count: 0, date: new Date().toDateString() };
    } catch {
        return { count: 0, date: new Date().toDateString() };
    }
};

const saveUsageData = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

let lastMessageTime = 0;

export const rateLimitService = {
    // Returns { allowed: boolean, error: string | null }
    checkLimits: () => {
        const now = Date.now();
        const { cooldownSeconds, maxMessagesPerDay, ui } = config.rateLimit;

        // 1. Check Cooldown
        if (now - lastMessageTime < cooldownSeconds * 1000) {
            return {
                allowed: false,
                error: ui.cooldownMessage
            };
        }

        // 2. Check Daily Limit
        let usage = getUsageData();
        const today = new Date().toDateString();

        // Reset if new day
        if (usage.date !== today) {
            usage = { count: 0, date: today };
            saveUsageData(usage);
        }

        if (usage.count >= maxMessagesPerDay) {
            return {
                allowed: false,
                error: ui.dailyLimitMessage
            };
        }

        return { allowed: true, error: null };
    },

    // Call this when a message is successfully sent
    incrementUsage: () => {
        lastMessageTime = Date.now();

        let usage = getUsageData();
        const today = new Date().toDateString();

        if (usage.date !== today) {
            usage = { count: 0, date: today };
        }

        usage.count++;
        saveUsageData(usage);
    },

    getRemainingMessages: () => {
        let usage = getUsageData();
        const today = new Date().toDateString();
        if (usage.date !== today) return config.rateLimit.maxMessagesPerDay;

        return Math.max(0, config.rateLimit.maxMessagesPerDay - usage.count);
    }
};
