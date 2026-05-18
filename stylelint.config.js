/** @type { import("stylelint").Config } */
export default {
    extends: [
        "stylelint-config-clean-order",
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue",
        "stylelint-config-recommended-vue/scss",
        "@stylistic/stylelint-config",
        "stylelint-plugin-defensive-css/configs/recommended",
        "stylelint-plugin-logical-css/configs/recommended",
    ],
    plugins: [
        "@stylistic/stylelint-plugin",
        "stylelint-declaration-block-no-ignored-properties",
        "stylelint-order",
        "stylelint-scss",
    ],
    rules: {
        "@stylistic/indentation": 4,
        "declaration-property-value-no-unknown": true,
        "defensive-css/no-fixed-sizes": [
            true,
            {
                "at-rules":
                    {
                        "@container": false,
                        "@media": false,
                    },
                "severity": "error",
            },
        ],
        "defensive-css/require-named-grid-lines": null,
        "plugin/declaration-block-no-ignored-properties": true,
        "selector-class-pattern": "^(?:[a-z]+(-[a-z0-9]+)*|[a-z]+([A-Z][a-z0-9]*)*)(?:__(?:[a-z]+(-[a-z0-9]+)*))?(?:--(?:[a-z]+(-[a-z0-9]+)*))?$",
    },
    overrides: [
        {
            files: [
                "./app/assets/styles/index.scss",
                "./app/assets/styles/reset.scss",
            ],
            rules: {
                "defensive-css/require-pure-selectors": null,
            },
        },
    ],
};
