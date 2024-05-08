import { defineConfig } from 'cypress'

export default defineConfig({
  port:4021,
  e2e: {
    baseUrl: 'http://localhost:4200',

    viewportHeight:680,
    viewportWidth:1200
  },
  video:true,
  videosFolder: 'cypress/videos',
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    //specPattern: '**/*.cy.ts'
  }

})