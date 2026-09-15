# Live88 UI Tests

![Playwright](https://img.shields.io/badge/Playwright-000?style=for-the-badge&logo=playwright)
![JavaScript](https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-000?style=for-the-badge&logo=nodedotjs)

**End-to-end UI test suite built with Playwright for a browser-based gaming lobby.**

The project focuses on testing user-facing flows inside an embedded iframe, including navigation, interactive controls and settings visibility.

---

## 🧪 Covered Scenarios

### Join table flow

The test verifies that:

- the game lobby iframe loads successfully
- a visible **Join table** action is available
- the action can be triggered
- the embedded application remains loaded after interaction

### Settings flow

The test verifies that:

- the lobby iframe is available
- the navigation menu opens
- the Settings view is reachable
- expected controls such as nickname, volume, dealer voice, client sounds and language are visible

---

## 🛠 Tech Stack

`Playwright` · `JavaScript ES6` · `Node.js`

---

## Testing Concepts Demonstrated

- End-to-end browser automation
- iframe interaction
- stable `data-test-id` selectors
- explicit visibility assertions
- asynchronous UI handling
- screenshots on failure
- video retention on failure
- reusable Playwright configuration

---

## 📁 Project Structure

```text
Live88-UI-Tests/
├── tests/
│   ├── join-table.spec.js
│   └── settings.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

Generated dependencies and test artifacts are excluded from version control.

---

## 🚀 Run Locally

### Install dependencies

```bash
npm install
```

### Install Playwright browser binaries

```bash
npx playwright install
```

### Run the test suite

```bash
npm test
```

### Open the HTML report

```bash
npm run show-report
```

---

## Project Focus

This repository demonstrates practical frontend testing skills beyond component implementation, with emphasis on browser automation and validating real user flows in a third-party web interface.

Built by [Jelizaveta Kruglova](https://github.com/anjufehno).
