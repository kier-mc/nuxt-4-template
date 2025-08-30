# Nuxt 4 Scaffold

## Introduction
A Nuxt 4 scaffold with a minimally-preconfigured structure and test environment.

Designed for simplicity, modularity and extensibility.
Comes with some opinions that are easily overridden.
Leverages `@antfu/eslint-config` for customisable linting and styling across HTML/TS,
and `stylelint` for CSS/SCSS coverage.

## Usage
1. Clone the repo.
2. Configure any settings you want to change and add any additional packages you want.
    - Run `bunx eslint --fix` to apply any changed ESLint rules.
3. Run `bun install`.

## Features
- Bun as a runtime environment.
- SCSS as a preprocessor:
    - Configured for testing use with CSS module (`<style module>`) syntax.
- Vitest (and related packages i.e. `@nuxt/test-utils`) as a test runner:
    - Configured to allow testing live server endpoints within your local environment.
- AntFu's ESLint config:
    - Default VSCode config supplied in `.vscode` directory.
- Stylelint:
    - Uses `stylelint-config-recommended-scss` and `stylelint-config-recommended-vue` as sensible defaults.

## Structure
### `app` directory
The main entry point for the Vue frontend.
Has a custom `reset.scss`, an `index.scss` entry point and some basic configuration settings.
Uses Nuxt layouts with default page-based routing.

### `layers` directory
A directory for additional frontend layers.
Contains a `ui` directory with some basic configuration, intended for reusable UI components.

[Read more](https://nuxt.com/docs/getting-started/layers) at the official documentation.

### `server` directory
The main entry point for the H3 backend.
Contains a `cors.ts` middleware file that allows testing live server endpoints in your local environment.
Only executes if you are in a development environment.

### `test` directory
A directory to contain automated tests.
Has two example files and two related example tests, a Vue/Nuxt component and a Nuxt server route.

## Configuration
At the root folder:

- `.eslint.config.mjs` to configure linting/styling preferences.
    - Works out of the box with the VSCode ESLint plugin.
    - [Options](https://eslint-config.antfu.me/configs).
- `.nuxt.config.ts` to configure Nuxt/Vue/Vite.
    - [Options](https://nuxt.com/docs/api/nuxt-config).
- `stylelint.config.js` to configure Stylelint.
    - Works out of the box with the VSCode Stylelint plugin.
    - [Options](https://stylelint.io/user-guide/configure).
- `.vitest.config.ts` to configure Vitest.
    - [Options](https://vitest.dev/config/).

If you prefer not to use Bun, delete `bun.lock` and then run `install` via your package manager of choice (`yarn`, `npm` etc).

## Testing Strategy
This scaffold uses Vitest's [Test Projects](https://vitest.dev/guide/projects.html#defining-projects) to configure test environments.
By default, one environment ("`nuxt`") is included.
No coverage provider (`v8`, `istanbul` etc) is provided by default.

The default glob pattern will pick up any file that follows the convention `*.{test,spec}.ts` in any directory/subdirectory.

### JS/TS Files
Import your files and [use Vitest](https://vitest.dev/guide/).
You may need to configure a seperate project if the `nuxt` environment isn't suitable.

### Vue SFCs
The example `component.spec.ts` contains some basic examples that cover testing common SFC functionality.

[Follow the guide](https://nuxt.com/docs/getting-started/testing) on the Nuxt docs for futher guidance.
`mountSuspended` wraps the `mount` function from `@vue/test-utils`, so [refer to their docs](https://test-utils.vuejs.org/api/) too for further options.

### H3 Server Routes
The example `server.spec.ts` file is designed to test a live endpoint from your local environment.
As this scaffold serves as a monorepo and the API is intended to be built internally, this reduces the need for mocking responses.

To run the example server test:

1. Move `/test/_example/examples/test.ts` into `/server/api/`.
2. Launch your development server with `bun run dev`.
3. Run Vitest with `bun run test` in a seperate terminal.
    - Do not run `bun test` as shorthand. This will initiate Bun's test runner, which does not have the correct context and will fail.

Refer to the H3 [event handler](https://h3.unjs.io/guide/event-handler) and [event object](https://h3.unjs.io/guide/event) for more info,
as well as the Nuxt [server](https://nuxt.com/docs/guide/directory-structure/server) docs for Nuxt-specific usage.
Check out the [Nitro](https://nitro.build/guide) docs too.
