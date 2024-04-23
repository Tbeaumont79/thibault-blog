import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: ["**/*.vue", "**/*.ts", "**/*.js"],
  rules: {
    "no-console": "off",
  },
});
