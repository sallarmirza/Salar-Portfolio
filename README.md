You never need to touch the components to update content. Just edit this file:

| Field | What it controls |
|---|---|
| `name` / `shortName` | Navbar name + Hero heading |
| `title` | Meta row in Hero |
| `tagline` | Hero subtext |
| `about` | About section paragraph |
| `skills[]` | Skills grid cards |
| `experience[]` | Experience timeline |
| `projects[]` | Project cards |
| `education` | Education card |
| `socials.github` | Contact section GitHub link |
| `socials.linkedin` | Contact section LinkedIn link |

---

## Design System

### The Ghost + Solid Heading Pattern
Every section uses a dual-layer heading — a large faded ghost text sits behind
a smaller solid heading. This is the core visual signature of the site.
Both are controlled via `sections.css`:

```css
.section-heading-wrap   /* wrapper for both layers */
.section-ghost          /* large faded background text */
.section-solid          /* smaller solid foreground heading */
```

### Adding a New Section
1. Create `src/components/YourSection.jsx`
2. Use the standard heading pattern:
```jsx
<section id="your-section">
  <div className="section-heading-wrap">
    <span className="section-ghost">SECTION</span>
    <span className="section-solid">Section</span>
  </div>
  <div className="section-body">
    {/* your content */}
  </div>
</section>
```
3. Import and add it to `App.jsx` with a `<div className="section-divider" />` above it
4. Add a nav link in `Navbar.jsx`

No new CSS needed — `sections.css` handles it all.

### Dark Mode
Toggled via the `☽` button in the navbar. Implemented using the `dark` class
on the root element. All dark variants use Tailwind's `dark:` prefix.

---

## Socials / Links

Add your URLs in `src/data/portfolio.js`:

```js
socials: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
}
```

The Contact section will render them automatically once filled in.

---

## Deployment

Works with any static host. Recommended:

- **Vercel** — connect your GitHub repo, zero config
- **Netlify** — drag and drop the `dist/` folder after `npm run build`
- **GitHub Pages** — use the `gh-pages` package

---

## License

MIT — free to use and adapt for your own portfolio.