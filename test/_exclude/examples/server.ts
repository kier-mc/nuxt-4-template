export default defineEventHandler(async (event) => {
    if (event.method === "GET") {
        return {
            message: "Sample API message",
        };
    }
    if (event.method === "POST") {
        const body = await readBody(event);
        return { body };
    }
});
