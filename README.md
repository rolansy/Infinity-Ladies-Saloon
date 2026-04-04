# Infinity Ladies Salon - Professional Website

A modern, responsive ladies salon website built with React and Vite, optimized for local SEO and deployed on Vercel.

**Live Website:** [infinityladiessalon.com](https://infinityladiessalon.com/)  
**Location:** Kothamangalam, Kerala, India  
**Phone:** +91 6238424024 ☎️ | WhatsApp: +91 6238424024 📱  
**Email:** contactus@infinityladiessalon.com ✉️

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Technologies](#technologies)
- [Contact](#contact)

---

## About

Infinity Ladies Salon is a premium ladies' salon and beauty parlour located in Kothamangalam. This website showcases our comprehensive range of beauty services including:

- **Hair Services** - Hair spa, treatment, coloring, extensions, smoothening
- **Makeup Services** - Bridal makeup, party makeup, engagement makeup
- **Skincare Services** - Facials, treatments, acne solutions, de-pigmentation
- **Nail Services** - Manicure, pedicure, nail art, extensions
- **Threading & Waxing** - Full body waxing, threading, dermaplaning
- And **28+ service categories** with **101 individual services**

The website is designed to:
- ✨ Showcase services with elegant purple theme
- 🎯 Attract local customers via SEO optimization
- 📱 Provide seamless browsing experience on all devices
- 📞 Facilitate easy customer contact and bookings
- 🗺️ Display salon location with embedded Google Maps

---

## Features

### 🎨 Design & UX
- **Premium Purple Theme** - Custom color palette (#F2EAF7, #C59DD9, #7A3F91, #2B0D3E)
- **Custom Cursor** - Interactive purple cursor with delayed ring animation
- **Reveal Animations** - Smooth scroll-triggered element animations
- **Responsive Design** - Optimized for desktop (4-column), tablet (2-column), mobile (1-column)
- **Custom Scrollbar** - Gradient purple scrollbar styling

### 📱 Responsive Layout
- **Desktop** (980px+): Full 4-column category grid, custom cursor, desktop navigation
- **Tablet** (560px - 980px): 2-column grid, hidden desktop elements, touch-optimized
- **Mobile** (< 560px): Single-column layout, optimized touch buttons

### 🛍️ Service Discovery
- **Category Grid** - 28 service categories displayed as interactive cards
- **Popup Modals** - Click category to view all services with pricing
- **Service Details** - Each service shows category, pricing, and description
- **Price Display** - Fixed prices or price ranges for flexible services

### 📍 Location & Contact
- **Google Maps Embed** - Interactive map showing salon location
- **Direct Contact Buttons** - One-click phone call and WhatsApp links
- **Email Contact** - Mailto link for email inquiries
- **Business Hours Info** - Location details with address

### 🖼️ Gallery
- **Service Pictures** - Professional gallery showcasing salon and services
- **Inauguration Hero** - High-resolution background image with overlay

### 🔍 SEO Optimization
- **Local Keywords** - Optimized for "ladies salon Kothamangalam", "beauty parlour", etc.
- **JSON-LD Schema** - BeautySalon structured data for search engines
- **Meta Tags** - Title, description, keywords optimized for local search
- **Canonical URL** - Prevents duplicate content issues
- **Open Graph Tags** - Social media sharing optimization
- **robots.txt** - Search engine crawl instructions
- **sitemap.xml** - URL index for search engines

---

## Project Structure

```
Infinity Ladies Saloon/
├── frontend/                          # React + Vite application
│   ├── src/
│   │   ├── App.jsx                   # Main React component
│   │   ├── App.css                   # Styles and theme
│   │   ├── assets/
│   │   │   ├── Inaugration.png       # Hero background image
│   │   │   └── logo.png              # Salon logo
│   │   └── data/
│   │       └── servicesData.json     # 28 categories, 101 services
│   ├── public/
│   │   ├── robots.txt                # Search engine crawl rules
│   │   └── sitemap.xml               # URL index for search engines
│   ├── index.html                    # HTML entry point (with SEO tags)
│   ├── vite.config.js                # Vite configuration
│   ├── vercel.json                   # Vercel deployment config (SPA rewrite)
│   ├── package.json                  # Dependencies and scripts
│   ├── eslint.config.js              # Code linting rules
│   └── dist/                         # Production build output (generated)
├── infinity-ladies-saloon.html       # Original static HTML version
├── services-grouped.json             # Service data (backup)
├── services list infinity ladies saloon.xlsx  # Original Excel data
│── color theme codes.png             # UI theme color reference
├── .git/                             # Git repository
└── README.md                         # This file
```

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** v9 or higher (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Step 1: Clone the Repository

```bash
git clone https://github.com/rolansy/Infinity-Ladies-Saloon.git
cd Infinity-Ladies-Saloon
```

### Step 2: Navigate to Frontend Directory

```bash
cd frontend
```

### Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 19.2
- React DOM 19.2
- Vite 8.0
- ESLint and related tools

### Step 4: Verify Installation

```bash
npm run lint
```

Should complete without errors. If you see eslint warnings, they're non-blocking.

---

## Development

### Start Development Server

```bash
npm run dev
```

This command:
- Starts a local development server (usually on `http://localhost:5173`)
- Enables Hot Module Replacement (HMR) for instant updates
- Watches for file changes automatically

**Output:**
```
  VITE v8.0.1  ready in 345 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

### Making Changes

1. Edit files in `src/` directory
2. Browser automatically refreshes with your changes
3. Check console for any errors

### Code Quality

```bash
npm run lint
```

Runs ESLint to check for code quality issues. Fix warnings before committing to main branch.

---

## Building for Production

### Create Production Build

```bash
npm run build
```

This command:
- Minifies and bundles all code
- Optimizes assets (images, CSS, JavaScript)
- Generates static files in `dist/` folder
- Output is production-ready for deployment

**Expected Output:**
```
✓ 20 modules transformed.
dist/assets/Inaugration-XXXXX.png   437.47 kB
dist/assets/logo-XXXXX.png          895.98 kB
dist/assets/index-XXXXX.css          13.83 kB │ gzip:  3.56 kB
dist/assets/index-XXXXX.js          215.33 kB │ gzip: 65.37 kB
✓ built in 130ms
```

### Preview Production Build Locally

```bash
npm run preview
```

This serves the production build locally to verify it works correctly before deployment.

---

## Deployment

### Automatic Deployment via Vercel

This project is configured for automatic deployment on Vercel.

**How It Works:**
1. Changes pushed to GitHub `main` branch trigger automatic build
2. Vercel builds and deploys to live URL
3. Live site updates within 30-60 seconds

**Deployment URL:** https://infinityladiessalon.com/

### Manual Vercel Setup (If Needed)

1. Push code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/)
3. Click "New Project"
4. Import the GitHub repository
5. Framework: Select "Vite"
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click "Deploy"

### Vercel Configuration

The `vercel.json` file includes SPA routing configuration:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures all routes load the React app correctly.

---

## Technologies

### Frontend Framework
- **React 19** - UI library for interactive components
- **Vite 8** - Fast build tool and development server
- **Vanilla CSS** - Custom styling with CSS variables

### Build & Deployment
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **Vercel** - Serverless deployment platform
- **GitHub** - Code repository

### SEO & Analytics
- **JSON-LD Schema** - Structured data markup
- **Open Graph Tags** - Social media integration
- **robots.txt** - Search engine directives
- **sitemap.xml** - URL index for crawlers

### Development Tools
- **ESLint** - Code quality linting
- **Vite HMR** - Hot module replacement for live development

---

## Performance

### Optimization Features
- **Minified Production Build** - 215.33 KB JavaScript (gzipped: 65.37 KB)
- **CSS Optimization** - 13.83 KB main stylesheet (gzipped: 3.56 KB)
- **Image Optimization** - Vite asset hashing for long-term caching
- **Lazy Loading** - Services and images load efficiently

### Load Times (Typical)
- First Contentful Paint: < 1 second
- Largest Contentful Paint: < 2 seconds
- Time to Interactive: < 2 seconds

---

## File Descriptions

### Core Application Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main React component with all sections (hero, categories, gallery, location, contact) |
| `src/App.css` | Complete styling, theme colors, responsive breakpoints, animations |
| `src/data/servicesData.json` | 28 service categories with 101 individual services and pricing |
| `src/assets/logo.png` | Salon logo (used in hero and header) |
| `src/assets/Inaugration.png` | Hero background image |

### Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite build configuration |
| `vercel.json` | Vercel deployment settings (SPA rewrite) |
| `index.html` | HTML entry point with SEO meta tags and JSON-LD schema |
| `eslint.config.js` | Code quality rules |

### SEO Files

| File | Purpose |
|------|---------|
| `public/robots.txt` | Instructs search engines which pages to crawl |
| `public/sitemap.xml` | Lists all pages for search engine indexing |

### Package Management

| File | Purpose |
|------|---------|
| `package.json` | Project metadata, dependencies, npm scripts |
| `package-lock.json` | Locks exact dependency versions for reproducible builds |

---

## Git Workflow

### Common Git Commands

```bash
# View current status
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Add feature description"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log --oneline -10
```

### Making Changes

1. Create feature branch (optional but recommended):
   ```bash
   git checkout -b feature/new-service
   ```

2. Make your changes and test locally

3. Commit changes:
   ```bash
   git add .
   git commit -m "Add new service category"
   ```

4. Push to GitHub:
   ```bash
   git push origin main
   ```

5. Visit Vercel - deployment starts automatically

---

## Troubleshooting

### Issue: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -r node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Development server won't start

**Solution:**
```bash
# Check port 5173 is not in use
# Or use custom port:
npm run dev -- --port 3000
```

### Issue: Build fails

**Solution:**
```bash
# Clear Vite cache
rm -rf dist
rm -rf node_modules

# Reinstall and rebuild
npm install
npm run build
```

### Issue: Assets not loading on Vercel

**Solution:**
- Ensure files are staged in Git: `git add .`
- Commit and push: `git commit -m "msg" && git push`
- Check Vercel build logs for errors
- Verify `dist/` folder contains all assets after `npm run build`

---

## Contact & Support

For questions or support regarding this website:

- **Phone:** +91 6238424024 ☎️
- **WhatsApp:** +91 6238424024 📱
- **Email:** contactus@infinityladiessalon.com ✉️
- **Website:** https://infinityladiessalon.com
- **Location:** Kothamangalam Bazar, Kothamangalam, Kerala, India

---

## License

This project is proprietary to Infinity Ladies Salon. Unauthorized copying, distribution, or use is prohibited.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | April 2026 | Initial React + Vite version with 101 services, SEO optimization, and Vercel deployment |

---

**Last Updated:** April 4, 2026  
**Repository:** [Infinity-Ladies-Saloon](https://github.com/rolansy/Infinity-Ladies-Saloon)  
**Status:** ✅ Live in Production
