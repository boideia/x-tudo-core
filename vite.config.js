import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  optimizeDeps: {
    include: [
      'lit',
      'lit/decorators.js', // Se estiver usando decorators
    ],
  },

  build: {
    rollupOptions: {
      input: getInputs(),
      output: {
        // Cria um arquivo separado para cada componente
        entryFileNames: '[name].js',
        format: 'es',
        chunkFileNames: '[name]-[hash].js',
        dir: 'dist', // Diretório de saída dos arquivos gerados
      },
    },
  },

  minify: true,
  rollupOptions: {
    external: /^lit/
  }
  
});


function getInputs() {
  const componentsPath = path.resolve(__dirname, 'src/components');
  const components = fs.readdirSync(componentsPath)
    .filter(file => fs.statSync(path.join(componentsPath, file)).isDirectory())
    .map(folder => {
      const componentPath = path.join(componentsPath, folder, 'component.ts');
      return {
        [folder]: componentPath,
      };
    });

  return Object.assign({}, ...components);
}