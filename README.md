<a href="https://www.cypress.io/"><img src="https://raw.githubusercontent.com/cypress-io/cypress-icons/master/src/logo/cypress-io-logo-round.svg" width="64"></a> [![NodeJs Logo](https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg)](https://nodejs.org/en/about/) [![Docker Logo](https://www.vectorlogo.zone/logos/docker/docker-icon.svg)](https://www.docker.com/) [![Git Logo](https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg)](https://git-scm.com/)

# QA Automated Tests 

This is the automation repository using the automation tool called [Cypress](https://www.cypress.io/) to automate GraphQL APIs

## Requires
1. [Node](https://nodejs.org/en/)
1. [Git](https://git-scm.com/)
1. [Cypress](https://www.cypress.io/)

## Setup
1. Clone the repository
1. Install: `npm install`
1. Ensure cypress can run: `npx cypress open`

## Folder structure
These folders hold end-to-end tests and supporting files for the Cypress Test Runner.
1. [fixtures](./cypress/fixtures) contains optional JSON data for mocking,
2. [e2e](./cypress/integration) contains the actual test files,
3. [plugins](./cypress/plugins) allow you to customize how tests are loaded,
4. [support](./cypress/support) file runs before all tests and is a great place to write or load additional custom commands,

## Tests
| Type | Location                                             |
| ---- | ---------------------------------------------------- |
| ui   | [cypress/e2e](./cypress/e2e)       |

## Running the Tests
1. Run all the tests in headless mode: `npm run test`
1. Run all the tests in chrome browser: `npm run cy:run:chrome`
1. Run all the tests in firefox browser: `npm run cy:run:firefox`

## Browsers supported
1. Chrome
1. Firefox
1. Edge
2. Electron