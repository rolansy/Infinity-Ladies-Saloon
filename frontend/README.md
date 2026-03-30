# Infinity Ladies Saloon - React + Vite

This is the React Vite version of the Infinity Ladies Saloon website.

## Features

- Purple premium theme based on your palette
- Category cards with popup service modal
- Services loaded from structured data file
- Pictures gallery section
- Booking section
- Location section with embedded Google Map
- Custom cursor, reveal effects, and styled scrollbar

## Project Structure

- `src/App.jsx` - main page UI and interactions
- `src/App.css` - theme and layout styles
- `src/data/servicesData.json` - all category/service entries
- `src/assets/logo.png` - ladies saloon logo
- `vercel.json` - SPA rewrite config for Vercel

## Local Development

1. Install dependencies:

	```bash
	npm install
	```

2. Run development server:

	```bash
	npm run dev
	```

3. Build production output:

	```bash
	npm run build
	```

4. Preview production build:

	```bash
	npm run preview
	```

## Manual Vercel Deployment

You can deploy manually in Vercel dashboard:

1. Import this folder as project root:
	`Infinity Ladies Saloon/infinity-ladies-saloon-react`
2. Framework preset: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

`vercel.json` already includes SPA rewrite to `index.html`.

## Location In Use

- Address reference: `3J58+V9 Kothamangalam, Kerala`
- Google map embed is set in `src/App.jsx`
- Map size can be adjusted in `src/App.css` using `.map-card` and `.map-card iframe`
