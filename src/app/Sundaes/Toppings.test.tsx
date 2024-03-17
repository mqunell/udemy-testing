import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../../mocks/server';
import Toppings from './Toppings';

describe('Toppings', () => {
	it('renders image for each topping option', async () => {
		render(<Toppings />);

		const toppingImages = (await screen.findAllByRole('img', {
			name: /topping$/i,
		})) as HTMLImageElement[];
		expect(toppingImages).toHaveLength(3);

		const altText = toppingImages.map((element) => element.alt);
		expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
	});

	it('handles toppings api fetch error', async () => {
		const newHandlers = [
			http.get('/api/toppings', () => {
				return new HttpResponse(null, { status: 500 });
			}),
		];
		server.resetHandlers(...newHandlers);

		render(<Toppings />);

		await screen.findByRole('alert');
		await screen.findByText(/please try again/i);
	});
});
