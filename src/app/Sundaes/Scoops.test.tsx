import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../../mocks/server';
import Scoops from './Scoops';

describe('Scoops', () => {
	it('renders image for each scoop option', async () => {
		render(<Scoops />);

		const scoopImages = (await screen.findAllByRole('img', {
			name: /scoop$/i,
		})) as HTMLImageElement[];
		expect(scoopImages).toHaveLength(2);

		const altText = scoopImages.map((element) => element.alt);
		expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
	});

	it('handles scoops api fetch error', async () => {
		const newHandlers = [
			http.get('/api/scoops', () => {
				return new HttpResponse(null, { status: 500 });
			}),
		];
		server.resetHandlers(...newHandlers);

		render(<Scoops />);

		await screen.findByRole('alert');
		await screen.findByText(/please try again/i);
	});
});
