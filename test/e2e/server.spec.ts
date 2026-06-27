import { $fetch, setup } from "@nuxt/test-utils/e2e";
import { describe, expect, it } from "vitest";

describe("api/test", async () => {
    // Boots a Nuxt server for the duration of the suite.
    // To target an already-running server instead, pass `{ host: "http://localhost:3000" }`.
    await setup();

    it("can fetch data from a server route", async () => {
        const data = await $fetch<{ message: string }>("/api/test");
        expect(data.message).toBe("Sample API message");
    });

    it("can post data to a server route", async () => {
        const message = "Sample post message";
        const data = await $fetch<{ body: { message: string } }>("/api/test", {
            body: { message },
            method: "POST",
        });
        expect(data.body.message).toBe(message);
    });
});
