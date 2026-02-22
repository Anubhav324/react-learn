import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// import "tailwindcss" layer(base);
// import "tailwindcss" layer(components);
// import "tailwindcss" layer(utilities);




// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
