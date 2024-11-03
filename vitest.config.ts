import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";

const ENABLE_EXCLUDE_DIRECTORY = true;

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
            ENABLE_EXCLUDE_DIRECTORY ? "**/test/_exclude/**" : "",
        ],
    },
});
