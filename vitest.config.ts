import { defineVitestProject } from "@nuxt/test-utils/config";
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        projects: [
            // Runtime/component tests in the `nuxt` environment.
            await defineVitestProject({
                test: {
                    name: "nuxt",
                    include: ["test/nuxt/**/*.{test,spec}.ts"],
                    environment: "nuxt",
                    css: {
                        modules: {
                            classNameStrategy: "non-scoped",
                        },
                    },
                },
            }),
            // End-to-end tests conducted via `@nuxt/test-utils/e2e` in the `node` environment.
            {
                test: {
                    name: "e2e",
                    include: ["test/e2e/**/*.{test,spec}.ts"],
                },
            },
        ],
    },
});
