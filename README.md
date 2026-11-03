# Ankit Sharma — CAD Portfolio

Portfolio site for Ankit Sharma, AutoCAD Draftsman and SolidWorks CAD Modeler. Built with
React, TanStack Start and Tailwind CSS. Every page is prerendered to static HTML.

## Local development

Requires Node.js 22 or newer.

```sh
npm install
npm run dev      # http://localhost:8080
```

## Build

```sh
npm run build    # static site in dist/client
npm run preview  # serve the production build locally
```

## Deploy to Netlify

Connect the repository in Netlify. `netlify.toml` already sets the build command
(`npm run build`), the publish directory (`dist/client`) and the Node version.

## Editing content

- Profile, experience, education and skills: `src/data/profile.ts`
- Portfolio projects: `src/data/work.ts`
- Navigation: `src/data/nav.ts`
- CV download: `public/Ankit_Sharma_AutoCAD_Draftsman_Resume.pdf`
