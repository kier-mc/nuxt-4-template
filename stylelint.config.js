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
    },
};
