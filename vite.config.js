// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/hello/', // 👈 change to match your deployment folder
  plugins: [react()],
})
