/*
 * Vite build and development configuration.
 * Integrates the official React plugin for Fast Refresh and JSX transformation.
 */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
