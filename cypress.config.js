import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    baseUrl: "http://publicazo.insprak.com/",
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      // implement node event listeners here
    await addCucumberPreprocessorPlugin(on, config);

    on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin(config)]
      })
    )

    return config;
    },
  },
});


