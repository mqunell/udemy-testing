import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
	it('contains correct heading', () => {
		render(<Home />);
		const headingElement = screen.getByRole('heading', {
			name: /Vitest and React Testing Library/i,
		});
		expect(headingElement).toBeInTheDocument();
	});
});
