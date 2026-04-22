import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '');
        return path.resolve(__dirname, 'src/assets', filename);
      }
    }
  };
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // React and Tailwind plugins are required for this Vite app.
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory.
      '@': path.resolve(__dirname, './src')
    }
  },
  assetsInclude: ['**/*.svg', '**/*.csv']
});
