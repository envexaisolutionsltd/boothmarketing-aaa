import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        audit: resolve(__dirname, 'automation-audit.html'),
        process: resolve(__dirname, 'how-we-work.html'),
        improve: resolve(__dirname, 'what-we-improve.html'),
        help: resolve(__dirname, 'who-we-help.html')
      }
    }
  }
});
