import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts({
    include: "./src"
  })],
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/counter.ts'),
        resolve(__dirname, 'src/types.ts'),
      ],
      formats: ["es"],
      name: 'index',
    }
  }
})