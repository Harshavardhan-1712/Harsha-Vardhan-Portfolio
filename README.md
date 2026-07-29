# B S Harsha Vardhan — Portfolio

A static, dependency-free portfolio (HTML/CSS/JS — no build step) covering hero,
about, tech stack, projects, experience, certifications, achievements, coding
profiles, currently-learning, and contact.

## Run locally
Just open `index.html`, or serve it:
```bash
npx serve .
```

## Deploy
Drop the three files (`index.html`, `style.css`, `script.js`) into:
- **GitHub Pages** — push to a repo, enable Pages on the branch/folder
- **Vercel / Netlify** — drag-and-drop deploy, or connect the repo (no build command needed)

## Before you publish — fill in these TODOs
All of these are marked `// TODO` in `script.js` or inline in `index.html`:

1. **Email** — `index.html` and `script.js` use a placeholder
   `harsha.vardhan.bs@example.com`. Replace both with your real address.
2. **Resume** — `DATA.resume` in `script.js` points to `#`. Upload your PDF
   (e.g. to `/assets/resume.pdf`) and update the path.
3. **LeetCode / HackerRank** — `DATA.leetcode` and `DATA.hackerrank` point to
   the generic homepages. Swap in your profile URLs.
4. **Project links** — each entry in `DATA.projects` has a `github` and `demo`
   field pointing at your GitHub profile / `#`. Point them at the exact repos
   and live deploys once you have them.
5. **Contact form** — currently opens the visitor's email client via
   `mailto:`. For a "real" inbox-delivered form, wire it to
   [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/)
   (both work with a static site, no backend needed).
6. **Open Graph image** — `assets/og-cover.png` is referenced but not
   included. Add a 1200×630 preview image for link unfurls, or remove the tags.
7. **Canonical URL** — update `https://harshavardhan.dev/` in the `<head>`
   once you have your real domain.

## Structure
```
index.html   → markup + content placeholders + SEO/OG/JSON-LD tags
style.css    → design tokens (CSS variables), layout, dark/light themes
script.js    → DATA object (projects/certs/stack — edit content here),
               typing effect, scroll-spy nav, reveal animations, theme
               toggle, expandable project cards, contact form handling
```

To add a new project, certification, or stack category, edit the `DATA`
object at the top of `script.js` — the page re-renders those sections from
that data, so you don't need to touch the HTML.

## Notes on this rebuild
The uploaded `.zip` contained a browser-saved snapshot of the live
CodeSandbox app (rendered DOM + CodeSandbox's own runtime scripts), not the
original React source — so there was no component code to refactor directly.
This version preserves the established visual identity (near-black canvas,
mint/violet/amber accents, Syne + Space Mono + DM Sans type system) and
rebuilds every section from your brief as a clean, dependency-free static
site, so it's easy to host anywhere without a build pipeline. If you'd
rather have it as an actual Next.js/React project (e.g. to match ORBIS or
InternHub's stack), say the word and it can be restructured into components.
