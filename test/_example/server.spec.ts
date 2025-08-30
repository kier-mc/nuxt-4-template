// @vitest-environment nuxt
// Example tests for working directly with live Nuxt server routes
import { describe, expect, it } from "vitest";

const ENDPOINT = "http://localhost:3000/api/test";

describe("get", async () => {
    it("can fetch data from a server route", async () => {
        const data = await $fetch(ENDPOINT);
        // @ts-expect-error: cannot infer type here
        expect(data.message).toBe("Sample API message");
    });
});

describe("post", async () => {
    it("can post data to a server route", async () => {
        const message = "Sample post message";
        const data = await $fetch(ENDPOINT, {
            body: {
                message,
            },
            method: "POST",
        });
        // @ts-expect-error: cannot infer type here
        expect(data.body.message).toBe(message);
    });
});
