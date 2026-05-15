# Hashnode Web Homepage Customising Extension

A Chrome extension that cleans up the Hashnode homepage by hiding distracting sections like Trending Tags, Trending Series, Recent Comments, and Authors Worth Following to create a more focused reading experience.

---

## Features

- Toggle sections ON/OFF directly from the toolbar
- Hides distracting homepage sections
- Expands blog content area for better readability
- Lightweight and fast
- Works on dynamically rendered content
- No tracking or analytics

---

## Installation

1. Clone this repository

```bash
git clone https://github.com/yourusername/hashnode-cleaner-extension.git
```

2. Open Chrome and navigate to:

```txt
chrome://extensions
```

3. Enable **Developer Mode**

4. Click **Load unpacked**

5. Select the project folder

---

## Usage

1. Open Hashnode
2. Click the extension icon in the toolbar
3. Badge status:
   - `ON` → Cleaner enabled
   - `OFF` → Cleaner disabled

---

## Tech Stack

- JavaScript
- Chrome Extensions API
- CSS

---

## Project Structure

```txt
.
├── manifest.json
├── background.js
├── content.js
├── remove-sections.css
└── images/
```

---

## How It Works

- Background service worker handles extension state toggling
- CSS hides stable UI sections
- Content scripts remove dynamic React-rendered elements
- MutationObserver watches for DOM updates and re-applies changes when needed

---

## License

This project is licensed under the GNU General Public License (GPL).
