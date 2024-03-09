import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	test: {
		css: true, // Despite this, Tailwind classes do not apply actual styles in tests
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/setupTests.ts',
	},
});
