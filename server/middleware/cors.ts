/**
 * Allows CORS requests if running in a dev environment
 * Enables live endpoint testing
 */
export default defineEventHandler((event) => {
    if (import.meta.dev) {
        setHeaders(event, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        });
    };
});
