import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update `base` to `/<your-repo-name>/` before pushing to GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/bradyash.github.io/' // CHANGE if your repo name is different
})
