# Portfolio v8

This is the eighth iteration of my personal portfolio website, built with Next.js and Tailwind CSS. The purpose of this
project is to showcase my development skills and recent work. It is a fully responsive, single-page application designed
with a focus on performance and accessibility.

## Features

- **Next.js**: Utilizes server-side rendering for better performance and SEO.
- **Tailwind CSS**: Rapidly build custom designs using utility-first CSS.
- **TypeScript**: Ensures type safety and reduces runtime errors.
- **Responsive Design**: Fully responsive and optimized for various screen sizes.
- **Accessible**: Implements best practices to ensure accessibility for all users.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/VivienG-Dev/portfolio-v8.git
   ```
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

### French and English versions

French keeps the existing URLs (`/`, `/projects`, `/project/manga-hive`). English
uses `/en`, `/en/projects` and `/en/project/manga-hive`. The language switcher keeps
the current page and section. Language is selected explicitly, without browser
language redirects.

Translations are stored in `content/locales/fr.json` and `content/locales/en.json`.
French project content stays in `content/projects.json`; English project copy is
in `content/locales/projects.en.json`, keyed by the same project IDs. Every
published project must have an English translation. The CV is currently French
and is labelled **CV (French)** on English pages.

`lib/i18n.ts` contains the locale and URL helpers. The `(fr)` and `(en)` route
groups share their page components and render the correct HTML language directly
in the static export. SEO copy lives in `lib/seo.ts`, with canonical URLs,
reciprocal language alternates and a bilingual sitemap.

Run `npm run brand:generate` to regenerate both social preview images after
editing `scripts/generate-brand-assets.mjs`. Run `npm run build`, then
`npm run test:i18n` to verify the exported pages, translations, language links and
SEO metadata. This setup uses the existing Next.js static export and does not
require an additional translation dependency.

### Directories

- `app/`: Main application directory.
- `components/`: Reusable UI components.
- `content/`: Static content for the site.
- `lib/`: Utility functions and helpers.
- `public/`: Static assets like images and fonts.
- `styles/`: Global styles.
