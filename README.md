# PM Tool Playwright Automation

Reusable Playwright and TypeScript project structure for the PM Tool QA suite.

## Prerequisites

- Node.js 20 or later
- npm

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install Playwright browsers:

   ```bash
   npm run install:browsers
   ```

3. Copy `.env.example` to `.env` and enter the target URLs and test credentials.

4. Add tests and supporting code to the appropriate folders.

## Project Structure

```text
config/       Environment configuration
fixtures/     Shared Playwright fixtures
pages/        Page Object classes
test-data/    Reusable test data and builders
tests/        Playwright test specifications
utils/        Shared helper functions
```

Keep selectors inside their related Page Object unless the team agrees on a separate locator layer.

## Why We Use This Structure

The project is divided by responsibility so tests remain easy to understand, reuse, and maintain as the application grows.

- `tests/` contains the test scenarios and expected results. Tests should describe user behavior without including large amounts of setup or page interaction code.
- `pages/` contains Page Object classes. Each class keeps the selectors and actions for one application page in one place, so UI changes can be updated without editing every test.
- `fixtures/` contains shared Playwright setup, such as authenticated sessions, page objects, test users, or API clients. This avoids repeating the same setup in multiple tests.
- `test-data/` contains reusable test inputs and data builders. Keeping test data separate makes scenarios easier to read and allows data to be changed without changing test logic.
- `config/` contains environment settings such as application and API URLs. This allows the same tests to run against local, QA, staging, or other environments.
- `utils/` contains small reusable helper functions that do not belong to a specific page or test.

This separation also makes team ownership clearer, reduces duplicated code, and helps code reviews focus on the part of the test suite that changed.

## Commands

```bash
npm test                 # Run all tests
npm run test:headed      # Run with visible browsers
npm run test:debug       # Run in Playwright debug mode
npm run test:ui          # Open Playwright UI mode
npm run test:chromium    # Run only in Chromium
npm run typecheck        # Check TypeScript
npm run report           # Open the latest HTML report
```

Generated reports, traces, screenshots, videos, local environment files, and `node_modules` must not be committed.
