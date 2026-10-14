# Abhinav's React Portfolio

A complete React + Vite rebuild of the supplied portfolio. The modern charcoal-and-green design includes Home, About, Projects, Résumé, and Contact views, with responsive layouts and reusable components.

## Run in VS Code

Install Node.js **22.12 or newer**, extract this ZIP, open the `portfolio` folder in VS Code, and run these commands in its terminal:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`. Use the Vite server to run the source project; opening the source HTML file directly does not compile JSX.

## Included features

- Reusable navigation, footer, buttons, icons, headings, technology tags, skill cards, project cards, project illustrations, detail dialogs, and contact form.
- Responsive layouts for phones, tablets, laptops, and wider displays.
- Accessible mobile navigation, active page indicators, keyboard focus styles, and a skip-to-content link.
- Persistent light/dark theme toggle that also works when local storage is unavailable.
- Project category filters, technology/name search, result counts, and an empty state with a reset action.
- Native project dialogs with close, backdrop, and Escape handling, scroll locking, and focus restoration.
- Original profile photo and résumé PDF, including download, open, and on-demand PDF preview.
- Inline contact validation, email address copying, and a prepared email draft with encoded subject and body.
- Reduced-motion support, hover feedback, page entrance animations, and a back-to-top button.

**Contact behavior:** the form opens the visitor's email application with a prepared message. The visitor sends it there. It does not send email automatically or use placeholder EmailJS keys. A working mail application or browser mail handler is required; the draft link and direct contact channels are also available.

Project preview graphics are labeled **Interface illustration**. They are illustrative compositions built with CSS, rather than screenshots of the linked projects. Existing external website URLs are retained from the original project.

## Customize

| File                       | Purpose                                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `src/data/portfolio.js`    | Edit personal details, social links, project content, technologies, education, and experience in one place. |
| `src/styles.css`           | Edit colors, spacing, typography, dark/light theme tokens, and responsive breakpoints.                      |
| `src/components/`          | Reuse or extend shared UI components.                                                                       |
| `src/pages/`               | Edit the content and layout of each page.                                                                   |
| `src/hooks/useRoute.js`    | Hash navigation and compatibility with the original HTML/query URLs.                                        |
| `src/hooks/useTheme.js`    | Theme state and persistence.                                                                                |
| `src/utils/contact.js`     | Contact validation, URI encoding, and email application behavior.                                           |
| `public/image/profile.jpg` | Replace the profile photo.                                                                                  |
| `public/MyResume.pdf`      | Replace the downloadable résumé.                                                                            |
| `public/favicon.svg`       | Edit the browser-tab icon.                                                                                  |

Use links such as `#/projects`, `#/about`, `#/resume`, and `#/contact` for internal navigation. Hash routes work on static hosts without server rewrite rules. The old `react.html?page=projects` and individual `about.html`, `projects.html`, `resume.html`, and `contact.html` URLs also render the React app.

To add a project, append an object to `projects` in `src/data/portfolio.js`. Set `category` to `web` or `mobile`. Add `liveUrl` or `sourceUrl` only when a real destination is available. The same data feeds the cards, dialog, filters, and résumé highlights.

## Build and verify

```bash
npm test
npm run build
npm run preview
```

The ZIP includes a generated `dist/` folder. For static hosting, deploy the contents of `dist/`; its `index.html` is the production entry point. Relative asset URLs support hosting at either a domain root or a repository subdirectory. Rebuild after editing source files.

## Update the existing GitHub Pages website

This project includes `.github/workflows/deploy.yml`. It builds the React source and deploys only `dist/`, including its compiled `index.html` and assets. GitHub Pages can keep the same default filename and live URL.

1. Copy the contents of the extracted `portfolio` folder into the root of your existing repository. `package.json`, `package-lock.json`, `src/`, `public/`, and `.github/` must be at the repository root.
2. In `Abhinavvel2006/my-portfolio`, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Commit and push the deployment workflow to `main`. If you use the GitHub website instead, choose **Add file → Create new file**, name it `.github/workflows/deploy.yml`, paste the supplied workflow, and commit it to `main`.
4. Open the **Actions** tab and select **Deploy React portfolio to GitHub Pages**. Wait for both the build and deployment jobs to succeed. If the workflow was committed before changing the Pages setting, use **Run workflow** or rerun the failed job after changing the setting.
5. Open `https://abhinavvel2006.github.io/my-portfolio/`. The `/index.html` URL also works. Hard-refresh with **Ctrl + Shift + R** after the new deployment succeeds.

The workflow uses Node.js 24, installs the lockfile with `npm ci`, runs `npm run build`, uploads `dist`, and deploys the artifact. Its YAML and production build were checked locally. The deployment itself runs in your GitHub repository after you add the workflow and set the Pages source.

The production build and 11 automated interaction tests passed. The tests cover React navigation, original URLs, mobile menu behavior, theme restoration and blocked storage, combined project filters/search, dialogs, form validation/encoding, and résumé preview behavior. The original photo/PDF bytes and all production HTML asset references were also checked.

The interaction tests run in jsdom, which does not measure browser layout. Visual browser QA and real email-client handoff were unavailable in the editing environment; check the rendered pages at your target device sizes when running the project locally.

## Fixes from the supplied project

- `index.html` is now the main React entry instead of opening the old static homepage.
- Corrected the Vite build command and ES module configuration.
- Moved the image and PDF into Vite's public directory so they are included in production.
- Replaced mixed HTML navigation with consistent client-side navigation and retained legacy URL compatibility.
- Consolidated repeated content and UI into data-driven React components.
- Removed CDN-dependent icon styling and replaced it with local SVG components.
- Replaced the old false contact success alert and placeholder EmailJS setup with an explicit email draft flow.

No backend or database is required to run this portfolio.
