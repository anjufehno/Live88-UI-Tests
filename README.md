# Live88 UI Tests with Playwright

This project contains automated UI tests for the [Live88 demo](https://demo.live88.io/operator/live88demo/live88-lobby/fun), created using [Microsoft Playwright](https://playwright.dev/).

---

## Test 1: Join Table Button Works

This test opens the Live88 **desktop lobby**, switches into the iframe, and verifies that the **"Join table"** button works correctly:

### What the test checks:

- The iframe containing the lobby appears on the page.
- The first visible "Join table" button inside the iframe is found.
- The button is clickable.
- After clicking, the iframe still contains a `<body>` element — confirming the game UI is loaded.

---

## Test 2: Opening Settings and Verifying Settings Items

This test opens the Live88 **desktop lobby**, switches into the iframe, opens the side **menu**, and verifies the **Settings** section is accessible and contains key items.

### What the test checks:

- The iframe containing the lobby appears on the page.
- The side menu button (two-line icon) is found and clicked.
- The **Settings** item in the menu becomes visible and is clicked.
- Inside the settings screen, the following items are visible:
  - **Nickname**
  - **Master volume**
  - **Dealer voice**
  - **Client sounds**
  - **Language**

---

## Tech Stack

- [Playwright](https://playwright.dev/)
- JavaScript (ES6)
- Node.js (v22.25.0)

---

## Project Structure

```LIVE88-UI-TESTS/
├── node_modules/             # Installed dependencies
├── test-results/             # Playwright test reports
├── tests/                    # UI test specifications
│   ├── join-table.spec.js    # Test 1: "Join Table" button test
│   └── settings.spec.js      # Test 2: Verifying Settings Items
├── package.json              # Project metadata and scripts
├── package-lock.json         # Dependency lock file
├── playwright.config.js      # Playwright configuration
└── README.md                 # Project documentation
```

---

## How to run

Make sure you have [Node.js](https://nodejs.org/) installed, then:

```bash
npm install
npx playwright install
npx playwright test