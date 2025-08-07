import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test-utils/test-setup.ts',
    testTimeout: 5000,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'src/**/*.test.{js,jsx,ts,tsx}',
        'src/index.{js,jsx,ts,tsx}',
        'src/**/*.d.ts',
        '**/__mocks__/**',
        '**/test-utils/**',
        'src/api/__mocks__/**',
      ],
      thresholds: {
        lines: 50,
        statements: 77,
        functions: 50,
        branches: 50,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
