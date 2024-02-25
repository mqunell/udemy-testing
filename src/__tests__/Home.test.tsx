import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
	it('renders links', () => {
		render(<Home />);

		const expectedLinks = [
			/static generation/i,
			/server-side rendering/i,
			/client-side rendering/i,
		];

		expectedLinks.forEach((name) => {
			const link = screen.getByRole('link', { name });
			expect(link).toBeDefined();
		});
	});
});
