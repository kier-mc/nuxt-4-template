# Nuxt 3/4 Scaffold

## Introduction
A ~~Nuxt 3~~ Nuxt 4 alpha scaffold with a minimally-preconfigured structure and test environment.
Will be updated for Nuxt v`4.0.0` on release.
Expect some hitches - run `bun update --latest` to roll back to Nuxt 3 if needed.

Designed for simplicity, modularity and extensibility.
Comes with some mild opinions that are easily overridden.
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
Contains an `_exclude` directory that is configured to be ignored from testing by default.
Has two files and two related tests.

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

If you prefer not to use Bun, delete `bun.lockb` and then run `install` via your package manager of choice (`yarn`, `npm` etc).

## Testing Strategy
The default environment is `happy-dom`.
Opt in to a Nuxt environment by adding `// @vitest-environment nuxt` as the first line of the test file.
If you prefer this to be the other way around or you want to change other options, refer to the config section above.

No coverage provider (`v8`, `istanbul` etc) is provided by default.

### JS/TS Files
Import your files and [use Vitest](https://vitest.dev/guide/).

### Vue SFCs
The example `component.spec.ts` contains some basic examples that cover testing common SFC functionality.

[Follow the guide](https://nuxt.com/docs/getting-started/testing) on the Nuxt docs for futher guidance.
`mountSuspended` wraps the `mount` function from `@vue/test=utils`, so [refer to their docs](https://test-utils.vuejs.org/api/) too for further options.

### H3 Server Routes
The example `server.spec.ts` file is designed to test a live endpoint from your local environment.
As this scaffold serves as a monorepo and the API is intended to be built internally, this reduces the need for mocking responses.

To run the example server test:

1. Move `server.spec.ts` into `/server/api/`.
2. Set `ENABLE_EXCLUDE_DIRECTORY` to `false` in `vitest.config.ts` so the test can run.
3. Launch your development server with `bun run dev`.
4. Run Vitest with `bun run test` in a seperate terminal.

Refer to the H3 [event handler](https://h3.unjs.io/guide/event-handler) and [event object](https://h3.unjs.io/guide/event) for more info,
as well as the Nuxt [server](https://nuxt.com/docs/guide/directory-structure/server) docs for Nuxt-specific usage.
Check out the [Nitro](https://nitro.build/guide) docs too.
