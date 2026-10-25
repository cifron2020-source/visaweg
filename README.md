# Visaweg

**Live site:** https://cifron2020-source.github.io/visaweg/

## English

Visaweg is a multilingual web guide (Russian, German, English) for students who want to study in Germany. It walks the user step by step from the first idea to the visa appointment at the consulate.

### Features
- Language switcher (RU / DE / EN) with the choice saved in the browser
- Interactive checklist of the 8 steps with saved progress
- All texts stored separately from the code in JSON files

### Technology
Plain HTML, CSS and JavaScript. No frameworks, no build tools. Hosted on GitHub Pages.

### Project structure
- index.html: page structure
- css/style.css: styles
- js/i18n.js: loads the language files and fills the page with text
- js/checklist.js: builds the checklist and saves progress in localStorage
- content/ru.json, de.json, en.json: all texts
- docs/: project notes (brief, decisions, handoff log)

### How it works
The page contains elements with a data-i18n attribute. The script i18n.js loads the JSON file of the selected language and inserts the matching text. Adding a language means adding one JSON file. The checklist stores the numbers of completed steps in localStorage, so no data leaves the user's device.

### Run locally
Open a terminal in the project folder and run: python3 -m http.server. Then open http://localhost:8000 in a browser. (Opening index.html directly does not work, because browsers block loading the JSON files from disk.)

### AI assistance
This project was developed with the help of AI assistants used as tutors and code reviewers. [WRITE HERE, TRUTHFULLY, WHAT YOU WROTE, CHANGED AND TESTED YOURSELF.]

### Disclaimer
This site does not replace professional advice. Always check current requirements on official websites.

## Deutsch

Visaweg ist ein mehrsprachiger Leitfaden (Russisch, Deutsch, Englisch) für Studierende, die in Deutschland studieren möchten. Er führt Schritt für Schritt von der ersten Idee bis zum Visumtermin im Konsulat.

### Funktionen
- Sprachumschalter (RU / DE / EN), die Auswahl wird im Browser gespeichert
- Interaktive Checkliste mit 8 Schritten und gespeichertem Fortschritt
- Alle Texte liegen getrennt vom Code in JSON-Dateien

### Technik
Reines HTML, CSS und JavaScript, ohne Frameworks und ohne Build-Werkzeuge. Gehostet auf GitHub Pages.

### Funktionsweise
Die Seite enthält Elemente mit dem Attribut data-i18n. Das Skript i18n.js lädt die JSON-Datei der gewählten Sprache und setzt den passenden Text ein. Eine neue Sprache bedeutet nur eine neue JSON-Datei. Die Checkliste speichert die Nummern der erledigten Schritte in localStorage, es werden keine Daten an einen Server gesendet.

### KI-Unterstützung
Dieses Projekt wurde mit Unterstützung von KI-Assistenten entwickelt, die als Tutor und Code-Reviewer genutzt wurden. [HIER WAHRHEITSGEMÄSS ERGÄNZEN, WAS SIE SELBST GESCHRIEBEN, ANGEPASST UND GETESTET HABEN.]

### Hinweis
Diese Seite ersetzt keine Beratung. Aktuelle Anforderungen finden Sie immer bei den offiziellen Stellen.
