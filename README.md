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

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run specific test file
npx playwright test tests/demoblaze/purchase.spec.ts

# Run tests with UI mode
npx playwright test --ui

# Run tests in debug mode
npx playwright test --debug
```

## Test Reports

```bash
# Show HTML report after test run
npx playwright show-report
```

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