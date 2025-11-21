import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    bundle: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        const ext = format === 'cjs' ? 'cjs' : 'mjs'
        return `index.${ext}`
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
})
