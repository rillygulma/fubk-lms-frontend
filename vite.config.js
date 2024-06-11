import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html'
    }
  },
  server: {
    host: true, // Listen on all addresses, including LAN and public IPs
    port: 3000  // Default port (this can be changed)
  },
  preview: {
    host: true, // Listen on all addresses, including LAN and public IPs
    port: 5000  // Default port for preview
  }
});
