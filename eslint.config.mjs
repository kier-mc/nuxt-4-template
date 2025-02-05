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
                        selector: "typeParameter",
                        format: ["PascalCase"],
                    },
                ],
            },
        },
    },
);
