# Nuxt 4 Scaffold

## Introduction
A Nuxt 4 scaffold with a minimally-preconfigured structure and test environment.
Focused on streamlining the developer experience and providing a stable foundation for most projects to be built on top of.
Emphasis on providing an environment that helps you to write robust code, as opposed to including every trendy package in the Nuxt ecosystem by default.
Designed for simplicity, customisability and extensibility.

## Usage
1. Clone the repo.
2. Run `bun install` (if you prefer not to use Bun, delete `bun.lock` and then run `install` via your package manager of choice).
3. Configure any settings you want to change and add any additional packages you want.
    - Run `bunx eslint --fix` and/or `bunx stylelint "**/*.{css,scss,vue}" --fix` to ensure consistency.

## Features
### Nuxt/Vue
Leverages the latest versions of Nuxt/Vue, preconfigured for page-based routing using the Nuxt 4 directory structure.
Additionally includes [VueUse](https://vueuse.org/) for its excellent utility function support.

### Vitest
Preconfigured and including example tests for both Vue SFCs and Nuxt/H3 server routes.
Ready for extension, as required.

### Linting/Formatting
Vue/TS files are covered by Antfu's ESLint config, with a few settings adjusted to my personal preferences.
SCSS/CSS files are covered by Stylelint, using `stylelint-config-recommended-scss` and `stylelint-config-recommended-vue` as sensible default rulesets.
Formatting is handled through `@stylistic/stylelint-plugin`.

Additional linters are also included to help you to write better code:
- CSS [Logical properties/values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values) are enforced via `stylelint-plugin-logical-css`.
- Certain [defensive CSS principles](https://defensivecss.dev/) are enforced via `styleline-plugin-defensive-css`.
- CSS logical property order is enforced via `stylelint-config-clean-order`.
- HTML accessibility best practices are enforced via `eslint-plugin-vuejs-accessibility`.

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
Contains an example API route (`api/test.ts`) that the e2e test exercises.

### `test` directory
A directory to contain automated tests, split by environment:
- `test/nuxt` - runtime/component tests that run in the `nuxt` environment (auto-included in the app's TypeScript project by Nuxt).
- `test/e2e` - end-to-end tests that boot a real server and run in the `node` environment.

Includes an example component test and an example server-route test.

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

## Testing Strategy
This scaffold uses Vitest's [Test Projects](https://vitest.dev/guide/projects.html#defining-projects) to configure test environments.
Two projects are included:
- `nuxt` - runs `test/nuxt/**` in the `nuxt` environment.
- `e2e` - runs `test/e2e/**` in the `node` environment.

`bun run test` runs both and passes from a clean clone - no separately-run dev server required.
No coverage provider (`v8`, `istanbul` etc) is provided by default.

Each project picks up files matching `*.{test,spec}.ts` within its directory.

### JS/TS Files
Import your files and [use Vitest](https://vitest.dev/guide/).
You may need to configure a separate project if neither environment is suitable for your needs.

### Vue SFCs
The example `test/nuxt/component.spec.ts` contains some basic examples that cover testing common SFC functionality.

[Follow the guide](https://nuxt.com/docs/getting-started/testing) on the Nuxt docs for further guidance.
`mountSuspended` wraps the `mount` function from `@vue/test-utils`, so [refer to their docs](https://test-utils.vuejs.org/api/) too for further options.

### H3 Server Routes
The example `test/e2e/server.spec.ts` tests a live endpoint against the route in `server/api/test.ts`.
It uses `setup()` from [`@nuxt/test-utils/e2e`](https://nuxt.com/docs/getting-started/testing#end-to-end-testing), which boots a Nuxt server for the duration of the suite, so the test is self-contained.
As this scaffold serves as a monorepo and the API is intended to be built internally, this reduces the need for mocking responses.

To run it: `bun run test` (or scope to the project with `bun run test -- --project e2e`).
Do not run `bun test` as shorthand - this invokes Bun's test runner, which lacks the correct context and will fail.

Refer to the H3 [event handler](https://h3.unjs.io/guide/event-handler) and [event object](https://h3.unjs.io/guide/event) for more info,
as well as the Nuxt [server](https://nuxt.com/docs/guide/directory-structure/server) docs for Nuxt-specific usage.
Check out the [Nitro](https://nitro.build/guide) docs too.
