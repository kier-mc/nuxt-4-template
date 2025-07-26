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
        "stylelint-scss",
    ],
    rules: {
        "plugin/declaration-block-no-ignored-properties": true,
        "selector-class-pattern": "^(?:[a-z]+(-[a-z0-9]+)*|[a-z]+([A-Z][a-z0-9]*)*)(?:__(?:[a-z]+(-[a-z0-9]+)*))?(?:--(?:[a-z]+(-[a-z0-9]+)*))?$",
    },
};
