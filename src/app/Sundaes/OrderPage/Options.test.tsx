import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { render, screen } from '@/app/Sundaes/test-utils';
import { server } from '@/mocks/server';
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

		it('updates the scoops total when scoops change', async () => {
			const user = userEvent.setup();
			render(<Options optType="scoops" />);

			const scoopsSubtotal = screen.getByText('Scoops subtotal: $', { exact: false });
			expect(scoopsSubtotal).toHaveTextContent('0.00');

			const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
			await user.clear(vanillaInput);
			await user.type(vanillaInput, '1');
			expect(scoopsSubtotal).toHaveTextContent('2.00');

			const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
			await user.clear(chocolateInput);
			await user.type(chocolateInput, '2');
			expect(scoopsSubtotal).toHaveTextContent('6.00');
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

		it('updates the toppings total when toppings change', async () => {
			const user = userEvent.setup();
			render(<Options optType="toppings" />);

			const toppingsSubtotal = screen.getByText('Toppings subtotal: $', { exact: false });
			expect(toppingsSubtotal).toHaveTextContent('0.00');

			const cherriesInput = await screen.findByRole('checkbox', { name: 'Cherries' });
			await user.click(cherriesInput);
			expect(toppingsSubtotal).toHaveTextContent('1.50');

			const chocolateInput = await screen.findByRole('checkbox', { name: 'M&Ms' });
			await user.click(chocolateInput);
			expect(toppingsSubtotal).toHaveTextContent('3.00');

			await user.click(chocolateInput);
			expect(toppingsSubtotal).toHaveTextContent('1.50');
		});
	});
});
