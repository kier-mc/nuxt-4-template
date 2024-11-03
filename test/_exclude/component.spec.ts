// @vitest-environment nuxt
// Example tests for working directly with Nuxt components

import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import Component from "./examples/component.vue";

describe("mounting", () => {
    it("can discover and mount the component", async () => {
        const component = await mountSuspended(Component);
        expect(component.exists()).toEqual(true);
    });
});

describe("data", () => {
    it("can read a string from the component", async () => {
        const component = await mountSuspended(Component);
        expect(component.text()).toContain("Sample template message");
    });

    it("can read styles", async () => {
        const component = await mountSuspended(Component);
        expect(component.html()).toContain(`class="sampleClass"`);
    });
});

describe("props", () => {
    it("can pass props", async () => {
        const props = { message: "Sample prop" };
        const component = await mountSuspended(Component, { props });
        expect(component.setupState.props.message).toEqual(props.message);
    });
});

describe("emits", () => {
    it("can read emits", async () => {
        const component = await mountSuspended(Component);
        const expected = "Sample emit message";
        const message = component.emitted().emit?.flat().find(message => message === expected);
        expect(message).toBe(expected);
    });
});

describe("script", () => {
    it("can execute a function from the script", async () => {
        const component = await mountSuspended(Component);
        const message: string | undefined = component.setupState.test();
        expect(message).toEqual("Sample function return");
    });
});

describe("interaction", () => {
    it("can trigger template events with a click", async () => {
        const component = await mountSuspended(Component);
        const expected = "Sample click emit message";
        const message = () => component.emitted().emit?.flat().find(message => message === expected);
        expect(message()).toBeUndefined();
        await component.find("button").trigger("click");
        expect(message()).toBe(expected);
    });
});
