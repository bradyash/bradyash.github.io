# BWA Consulting – Vite + React + Tailwind

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages
1. Push this repo to GitHub (default branch `main`).
2. In `vite.config.ts`, set `base` to `/<your-repo-name>/` (default here is `/bwa-consulting/`).
3. Go to **Settings → Pages** and set **Source: GitHub Actions**.
4. The provided workflow in `.github/workflows/deploy.yml` will build and deploy on each push to `main`.

Your site will be available at `https://<your-username>.github.io/<your-repo-name>/`.
