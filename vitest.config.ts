import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";

const ENABLE_EXAMPLE_TESTS = false;

export default defineVitestConfig({
    test: {
        css: {
            modules: {
                classNameStrategy: "non-scoped",
            },
        },
        environment: "happy-dom",
        exclude: [
            ...configDefaults.exclude,
            ENABLE_EXAMPLE_TESTS ? "**/test/_example/**" : "",
        ],
    },
});
