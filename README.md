# UX Study Path

A start-to-finish UX design learning path you can host on any website.
It is a static site: plain HTML, CSS and JavaScript, with no build step, server or database.

## Files

```
ux-study-path/
├── index.html          Page shell (header, sidebar, main area)
└── assets/
    ├── styles.css      All styles, including light and dark themes
    ├── data.js         Course content: lessons, study links, summaries, study notes
    ├── app.js          App logic: rendering, routing, search, progress, theme switcher
    └── favicon.svg     Browser tab icon
```

## Put it live

Upload the whole `ux-study-path` folder, keeping the `assets` folder next to `index.html`.

- **Your own hosting (cPanel, FTP, any web server):** upload the folder into `public_html` (or a subfolder such as `public_html/ux`). Visit `yourdomain.com/ux/`.
- **Netlify:** go to app.netlify.com/drop and drag the folder onto the page.
- **Vercel:** create a new project, import the folder, and deploy. No framework or build settings are needed.
- **GitHub Pages:** push the folder's contents to a repository, then turn on Pages under Settings → Pages (branch: main, folder: root).

It also works offline: double-click `index.html` to open it in a browser.

## Good to know

- **Progress, notes and theme** are saved in each visitor's own browser (localStorage). They aren't shared between devices or visitors.
- **Fonts** (Geist and Source Serif 4) load from Google Fonts. Without internet, the page falls back to system fonts.
- **Links between pages** use `#` addresses (for example `index.html#user-interviews`), so every lesson and study note can be bookmarked or shared, and no server rewrite rules are needed.
- **Editing content:** lessons are in the `MODULES` list, study links in `RES`, summaries in `SUM`, and study notes in `NOTES`, all inside `assets/data.js`.

## Credits

Study notes and summaries are written in our own words from the linked articles, guides and videos, mainly from Nielsen Norman Group, W3C, WebAIM, Figma, Material Design, Apple, the Design Council and Laws of UX. Every note links to its original source. Keep those links if you publish the site.
