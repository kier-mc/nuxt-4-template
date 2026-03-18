/** @type { import("stylelint").Config } */
export default {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue",
        "stylelint-config-recommended-vue/scss",
        "stylelint-plugin-defensive-css/configs/recommended",
        "stylelint-plugin-logical-css/configs/recommended",
    ],
    plugins: [
        "stylelint-declaration-block-no-ignored-properties",
        "stylelint-scss",
    ],
    rules: {
        "declaration-property-value-no-unknown": true,
        "plugin/declaration-block-no-ignored-properties": true,
        "selector-class-pattern": "^(?:[a-z]+(-[a-z0-9]+)*|[a-z]+([A-Z][a-z0-9]*)*)(?:__(?:[a-z]+(-[a-z0-9]+)*))?(?:--(?:[a-z]+(-[a-z0-9]+)*))?$",
    },
};
