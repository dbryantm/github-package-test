import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import hq from 'alias-hq'

export default defineConfig({
  build: {
    bundle: true,
    emptyOutDir: true,
    lib: {
      // entry: 'src/index.ts',
      entry: {
        index: 'src/index.ts',
        second: 'src/second.ts',
      },
      formats: ['es', 'cjs'],
      // fileName: (format, entry) => {
      //   let ext = 'js'

      //   if (format === 'cjs') ext = 'cjs'

      //   return `${entry}.${ext}`
      // },
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
