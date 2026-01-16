# Public Assets

## Logo

The ElevarDev logo is located at `/public/logo.svg`. 

The logo component (`components/Logo.tsx`) will:
1. First try to load `/logo.svg` from the public folder
2. Fallback to an inline SVG if the image doesn't load

To replace with your own logo image:
- Place your logo file in this folder as `logo.svg` (or `logo.png`, `logo.jpg`)
- Update the `Image` component src in `components/Logo.tsx` to match your filename
- Recommended formats: SVG (preferred), PNG with transparency, or JPG
- Recommended size: 120x120px or higher for crisp display

## Hero Background Image

Place your hero background image here as `hero-background.jpg`.

Recommended specifications:
- Format: JPG or WebP
- Dimensions: 1920x1080 or higher (16:9 aspect ratio)
- File size: Optimized for web (under 500KB recommended)

The image will be used as the background for the hero section with an overlay to ensure text readability.

