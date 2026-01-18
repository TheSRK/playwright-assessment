# Playwright E2E Test Suite

Automated end-to-end tests for Demoblaze demo store using Playwright with Page Object Model.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Environment Setup

Copy the example environment file and configure:

```bash
cp .env.example .env
```

The `.env` file contains:
```
DEMOBLAZE_URL=https://www.demoblaze.com
```

## Running Tests

```bash
# Run all tests (runs on all configured browsers: chromium, firefox, webkit)
npm test

# Run tests on a specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests with UI mode
npm run test:ui

# Run tests in debug mode
npm run test:debug
```

## Test Reports

```bash
# Show HTML report after test run
npm run report
```

## Supported Browsers

Tests are configured to run on multiple browsers:
- **Chromium** - Google Chrome engine
- **Firefox** - Mozilla Firefox
- **WebKit** - Safari engine

## Project Structure

```
├── pages/              # Page Object Models
│   └── demoblaze/
│       ├── HomePage.ts
│       ├── ProductDetailPage.ts
│       ├── CartPage.ts
│       └── CheckoutModal.ts
├── tests/              # Test specs
│   └── demoblaze/
│       └── purchase.spec.ts
├── testdata/           # Test data files
│   └── testData.json
├── fixures/            # Custom fixtures
│   └── page.fixures.ts
├── config.ts           # Configuration
└── playwright.config.ts
```

## Configuration

Test configuration is managed in `playwright.config.ts` and `config.ts`.