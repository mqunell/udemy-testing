import userEvent from '@testing-library/user-event';
import { render, screen } from '../test-utils';
import OrderPage from './OrderPage';

describe('OrderPage', () => {
	describe('grand total', () => {
		it('starts at 0', async () => {
			render(<OrderPage />);
			const grandTotal = screen.getByRole('heading', { name: /grand total:/i });
			expect(grandTotal).toHaveTextContent(/\$0.00$/);
		});

		it('updates properly when scoop is added first', async () => {
			const user = userEvent.setup();
			render(<OrderPage />);
			const grandTotal = screen.getByRole('heading', { name: /grand total:/i });

			const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
			await user.clear(vanillaInput);
			await user.type(vanillaInput, '2');
			expect(grandTotal).toHaveTextContent(/\$4.00$/);

			const cherriesCheckbox = await screen.findByRole('checkbox', { name: 'Hot fudge' });
			await user.click(cherriesCheckbox);
			expect(grandTotal).toHaveTextContent(/\$5.50$/);

			await user.clear(vanillaInput);
			expect(grandTotal).toHaveTextContent(/\$1.50$/);

			await user.click(cherriesCheckbox);
			expect(grandTotal).toHaveTextContent(/\$0.00$/);
		});

		it('updates properly when topping is added first', async () => {
			const user = userEvent.setup();
			render(<OrderPage />);
			const grandTotal = screen.getByRole('heading', { name: /grand total:/i });

			const mmsCheckbox = await screen.findByRole('checkbox', { name: 'M&Ms' });
			await user.click(mmsCheckbox);
			expect(grandTotal).toHaveTextContent(/\$1.50$/);

			const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
			await user.clear(chocolateInput);
			await user.type(chocolateInput, '1');
			expect(grandTotal).toHaveTextContent(/\$3.50$/);

			await user.click(mmsCheckbox);
			expect(grandTotal).toHaveTextContent(/\$2.00$/);

			await user.clear(chocolateInput);
			expect(grandTotal).toHaveTextContent(/\$0.00$/);
		});
	});
});
