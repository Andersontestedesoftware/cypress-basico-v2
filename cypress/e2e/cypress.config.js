const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8i2kir',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
