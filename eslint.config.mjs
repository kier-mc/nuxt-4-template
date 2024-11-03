import antfu from "@antfu/eslint-config";

export default antfu(
    {
        formatters: {
            css: true,
        },
        rules: {
            "antfu/if-newline": "off",
            "no-console": "warn",
            "perfectionist/sort-named-imports": ["warn", { groupKind: "types-first" }],
            "symbol-description": "off",
            "ts/consistent-type-definitions": "off",
        },
        stylistic: {
            indent: 4,
            quotes: "double",
            semi: true,
        },
    },
);
