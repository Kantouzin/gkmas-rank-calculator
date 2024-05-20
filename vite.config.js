import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import 'dotenv/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL,
  build: {
    outDir: 'docs'
  },
  plugins: [svelte()],
})
