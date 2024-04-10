import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from './page';

describe('App', () => {
	it('goes through order phases', async () => {
		const user = userEvent.setup();
		render(<Page />);

		// OrderPage
		const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
		await user.clear(vanillaInput);
		await user.type(vanillaInput, '2');
		const cherriesCheckbox = await screen.findByRole('checkbox', { name: 'Cherries' });
		await user.click(cherriesCheckbox);

		const orderButton = screen.getByRole('button', { name: /order sundae/i });
		await user.click(orderButton);

		// SubmitPage
		const scoopsTotal = screen.getByRole('heading', { name: /scoops/i });
		expect(scoopsTotal).toHaveTextContent(/\$4.00$/);
		expect(screen.getByText('2 Vanilla')).toBeInTheDocument();
		const toppingsTotal = screen.getByRole('heading', { name: /toppings/i });
		expect(toppingsTotal).toHaveTextContent(/\$1.50$/);
		expect(screen.getByText('Cherries')).toBeInTheDocument();

		const tacCheckbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
		await user.click(tacCheckbox);
		const confirmButton = screen.getByRole('button', { name: /confirm order/i });
		await user.click(confirmButton);

		// ConfirmationPage
		expect(screen.getByText(/loading/i)).toBeInTheDocument();
		await screen.findByText(/your order number is 12345/i);
		expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();

		const newOrderButton = screen.getByRole('button', { name: /new order/i });
		await user.click(newOrderButton);

		// OrderPage again
		const scoopsSubtotal = screen.getByText(/scoops subtotal/i);
		expect(scoopsSubtotal).toHaveTextContent(/\$0.00$/);
		const toppingsSubtotal = screen.getByText(/toppings subtotal/i);
		expect(toppingsSubtotal).toHaveTextContent(/\$0.00$/);
	});
});
