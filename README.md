# Human Text Checker – Chrome Extension

A simple Chrome extension that scans the text on any webpage and determines whether it "looks human" based on a list of commonly overused or generic phrases. It's great for detecting AI-generated or formulaic content. Common words were extracted from [this reddit post](https://www.reddit.com/r/ChatGPTPro/comments/163ndbh/overused_chatgpt_terms_add_to_my_list/)

---

## 🚀 Features

- Scans visible page text for 100+ specific words and phrases.
- Flags content as "Good to go" or "This looks less human".
- Displays matched words along with how many times each appears.
- Fast and lightweight — runs directly in your browser.

---

## 🧠 Logic

The extension uses the following rules:
- If **5 or more different target phrases** are found, or
- If **any single phrase appears more than twice**,  
→ then it returns: `This looks less human`.

Otherwise, it returns: `Good to go`.

It also displays a list of matched phrases and their count for transparency.

---

## 🛠 Installation (Unpacked Extension)

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked** and select this folder.
5. Pin the extension and click **"Scan Page"** on any open tab!

---

## 📁 Files

| File           | Description                            |
|----------------|----------------------------------------|
| `manifest.json`| Extension manifest (permissions, popup)|
| `popup.html`   | User interface for the popup           |
| `popup.js`     | Core logic for scanning page text      |
| `icon.png`     | Icon for the extension (placeholder)   |
| `README.md`    | You're here! Extension overview        |

---

## ✅ Example Output

**Verdict:** Good to go  
**Matched Words:**
- However: 2  
- Therefore: 1  

---

## 🔒 Permissions

This extension only uses:
- `scripting` – to inject scanning logic
- `activeTab` – to access the current tab's content

No data is stored or sent externally.

---

## 📌 Customization

Want to change the detection threshold or word list?  
Open `popup.js` and modify the `targetWords` array or logic near the bottom of the script.

---

## 📬 Feedback

Found a false positive or want to suggest new words?  
Open an issue or contribute directly!

---

## 📄 License

MIT License. Use freely and responsibly.
