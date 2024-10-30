import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://barber-app-proj.herokuapp.com', 
    setupNodeEvents(on, config) {
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 
    supportFile: 'cypress/support/index.ts', 
  },
  env: {
    // Define environment variables
    apiUrl: 'https://barber-app-proj.herokuapp.com',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 8000, 
  pageLoadTimeout: 60000, 
});
