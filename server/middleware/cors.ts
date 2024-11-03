/**
 * Allows CORS requests if running in a dev environment
 * Enables live endpoint testing
 */
export default defineEventHandler((event) => {
    if (import.meta.dev) {
        setHeader(event, "Access-Control-Allow-Origin", "*");
        setHeader(event, "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        setHeader(event, "Access-Control-Allow-Headers", "Content-Type, Authorization");
    };
});
