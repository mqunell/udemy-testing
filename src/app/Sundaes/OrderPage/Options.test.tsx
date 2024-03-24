import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../../../mocks/server';
import Options from './Options';

describe('Options', () => {
	describe('scoops', () => {
		it('renders image for each scoop option', async () => {
			render(<Options optType="scoops" />);

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
			server.use(...newHandlers);

			render(<Options optType="scoops" />);

			await screen.findByRole('alert');
			await screen.findByText(/please try again/i);
		});
	});

	describe('toppings', () => {
		it('renders image for each topping option', async () => {
			render(<Options optType="toppings" />);

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
			server.use(...newHandlers);

			render(<Options optType="toppings" />);

			await screen.findByRole('alert');
			await screen.findByText(/please try again/i);
		});
	});
});
