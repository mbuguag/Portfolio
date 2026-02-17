# Joseph Mbugua Dev Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and EmailJS.

## Tech Stack

- React 19 + React Router
- Vite 7
- Tailwind CSS
- Framer Motion
- EmailJS (contact form)
- Node.js static server for production (`server.js`)

## Project Structure

```text
src/
  components/
    Hero.jsx
    Navbar.jsx
    ScrollToTop.jsx
  pages/
    Home.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Resume.jsx
    Contact.jsx
  data/projects.js
public/
  Profile.jpg
  Joseph_Mbugua_Gitau_Resume.pdf
  projects/
server.js
```

## Run Locally

```bash
npm install
npm run dev
```

## Build and Start

```bash
npm run build
npm start
```

`npm start` serves the `dist/` output and provides an `/api` placeholder route.

## EmailJS Environment Variables

Create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these values, the contact form will render but sending will fail.

## SEO Setup

1. Set your production domain for SPA metadata:

```bash
VITE_SITE_URL=https://joseph-personal-portfolio.vercel.app/
```

2. Generate `robots.txt` and `sitemap.xml` files:

```bash
SITE_URL=https://joseph-personal-portfolio.vercel.app/npm run seo:generate
```

This writes:
- `public/robots.txt`
- `public/sitemap.xml`
