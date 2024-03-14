import { render, screen } from '@testing-library/react';
import Options from './Options';

describe('Options', () => {
	it('renders image for each scoop option', async () => {
		render(<Options optionType="scoops" />);

		const scoopImages = (await screen.findAllByRole('img', {
			name: /scoop$/i,
		})) as HTMLImageElement[];
		expect(scoopImages).toHaveLength(2);

		const altText = scoopImages.map((element) => element.alt);
		expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
	});

	it('renders image for each topping option', async () => {
		render(<Options optionType="toppings" />);

		const toppingImages = (await screen.findAllByRole('img', {
			name: /topping$/i,
		})) as HTMLImageElement[];
		expect(toppingImages).toHaveLength(3);

		const altText = toppingImages.map((element) => element.alt);
		expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
	});
});
