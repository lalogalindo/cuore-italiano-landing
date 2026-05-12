# Cuore Italiano Landing

## Run
```bash
npm install
npm run dev
```

## Build / Vercel
```bash
npm run build
```
Deploy on Vercel with the default Vite settings.

## Asset assumptions
- `public/assets/cuore-logo.svg` is a local vector approximation of the provided logo and should be replaced with the official production logo file when available.
- Product imagery points to Cuore Italiano website uploads and falls back to `public/assets/gelato-fallback.svg` if a remote URL becomes unavailable.
