# elevardev Website

A modern, premium startup website for elevardev - a software development company based in Sri Lanka.

## Features

- 🎨 Modern, clean, futuristic design
- 🌓 Dark & Light mode toggle
- 📱 Fully responsive (mobile-first)
- ✨ Smooth animations with Framer Motion
- 🚀 SEO optimized
- ♿ Accessibility features
- 🎯 Production-ready code

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **Theme:** next-themes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services section
│   ├── WhyUs.tsx           # Why elevardev section
│   ├── Technologies.tsx    # Technologies section
│   ├── Projects.tsx        # Projects section
│   ├── Process.tsx         # Process section
│   ├── CTA.tsx             # Call to action section
│   ├── Footer.tsx           # Footer component
│   ├── ThemeProvider.tsx   # Theme context provider
│   └── ThemeToggle.tsx     # Theme toggle button
└── public/                 # Static assets
```

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

## Customization

- Update company information in components
- Modify colors in `tailwind.config.ts`
- Add your own images to the `public` folder
- Update metadata in `app/layout.tsx`

## License

© elevardev 2026. All rights reserved.


