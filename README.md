# Tampermonkey Utility Scripts

A collection of handy **Tampermonkey user scripts** to automate and enhance your browsing experience.

---

## 🚀 Features

* Automate repetitive tasks on popular websites
* Customize UI for ease of use
* Adjustable parameters (speed, toggles)
* Easy installation via Tampermonkey

---

## 📂 Repo Structure

```
/youtube-auto-skip
  └─ script.js              # YouTube auto skip ads script

/mangafire-auto-scroll
  └─ script.js              # MangaFire auto scroll script

/another-script
  └─ script.js              # Future scripts go here

README.md                  # This documentation
LICENSE                   # Your license file
```

---

## 📥 Installation

### 1. Install Tampermonkey

* [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
* [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

### 2. Add a Script

You can add scripts individually:

1. Open Tampermonkey dashboard (click extension → Dashboard).
2. Click **+ Create a new script**.
3. Open the folder of the desired script (e.g. `/youtube-auto-skip/`) in your local repo.
4. Copy the contents of `script.js`.
5. Paste into Tampermonkey editor and save.

---

## 🛠 Usage

* Visit supported websites according to each script’s `@match` metadata.
* The script will run automatically.
* Use UI controls if provided.

---

## 📋 Supported Scripts (Current)

| Folder Name           | Description                                 | Supported Sites                                            |
| --------------------- | ------------------------------------------- | ---------------------------------------------------------- |
| youtube-auto-skip     | Automatically skip skippable ads on YouTube | [https://www.youtube.com/](https://www.youtube.com/)\*     |
| mangafire-auto-scroll | Auto-scroll manga pages with draggable UI   | [https://mangafire.to/read/](https://mangafire.to/read/)\* |

---

## 🤝 Contributing

Feel free to add new script folders with a `script.js` inside, following the existing pattern.

---

## 📄 License

Licensed under the MIT License — see LICENSE file.


