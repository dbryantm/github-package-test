import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import hq from 'alias-hq'

export default defineConfig({
  build: {
    bundle: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        let ext = 'js'

        if (format === 'cjs') ext = 'cjs'

        return `index.${ext}`
      },
    },
  },
  plugins: [dts({ bundleTypes: true, rollupTypes: true })],
  resolve: {
    alias: hq.get('rollup'),
  },
  test: {
    include: ['src/**/*.test.ts'],
    restoreMocks: true,
    // setupFiles: ['./vitest.setup.ts'],
  },
})
