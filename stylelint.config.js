/** @type { import("stylelint").Config } */
export default {
    extends: [
        "stylelint-config-recommended-vue",
        "stylelint-config-recommended-vue/scss",
    ],
    overrides: [
        {
            files: ["*.scss", "**/*.scss"],
            extends: ["stylelint-config-recommended-scss"]
        }
    ],
};