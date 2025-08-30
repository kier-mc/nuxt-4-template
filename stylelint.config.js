/** @type { import("stylelint").Config } */
export default {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue",
        "stylelint-config-recommended-vue/scss",
    ],
    plugins: [
        "stylelint-declaration-block-no-ignored-properties",
        "stylelint-plugin-defensive-css",
        "stylelint-scss",
    ],
    rules: {
        "declaration-property-value-no-unknown": true,
        "plugin/declaration-block-no-ignored-properties": true,
        "plugin/use-defensive-css": [
            true,
            {
                "accidental-hover": true,
                "background-repeat": true,
                "custom-property-fallbacks": true,
                "flex-wrapping": true,
                "scroll-chaining": true,
                "scrollbar-gutter": true,
                "vendor-prefix-grouping": true,
                "severity": "warning",
            },
        ],
        "selector-class-pattern": "^(?:[a-z]+(-[a-z0-9]+)*|[a-z]+([A-Z][a-z0-9]*)*)(?:__(?:[a-z]+(-[a-z0-9]+)*))?(?:--(?:[a-z]+(-[a-z0-9]+)*))?$",
    },
};
