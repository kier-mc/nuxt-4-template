import antfu from "@antfu/eslint-config";

export default antfu(
    {
        formatters: {
            css: true,
        },
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            "antfu/if-newline": "off",
            "no-console": "warn",
            "perfectionist/sort-named-imports": ["warn", { groupKind: "types-first" }],
            "symbol-description": "off",
        },
        stylistic: {
            indent: 4,
            quotes: "double",
            semi: true,
        },
        typescript: {
            overrides: {
                "ts/consistent-type-definitions": "off",
                "ts/naming-convention": [
                    "error",
                    {
                        selector: "variable",
                        format: ["camelCase", "UPPER_CASE"],
                    },
                    {
                        selector: "variable",
                        types: ["boolean"],
                        format: ["PascalCase"],
                        prefix: ["can", "did", "has", "is", "should", "will"],
                    },
                    {
                        selector: "typeParameter",
                        format: ["PascalCase"],
                        prefix: ["T"],
                    },
                    {
                        selector: ["objectLiteralMethod", "objectLiteralProperty"],
                        format: ["camelCase", "snake_case", "UPPER_CASE"],
                    },
                ],
            },
        },
    },
);
