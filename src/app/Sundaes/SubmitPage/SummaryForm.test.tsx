import userEvent from '@testing-library/user-event';
import { render, screen } from '../test-utils';
import SummaryForm from './SummaryForm';

describe('SummaryForm', () => {
	it('starts with t&c unchecked and button disabled', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
		expect(checkbox).not.toBeChecked();

		const confirmButton = screen.getByRole('button', { name: /confirm order/i });
		expect(confirmButton).toBeDisabled();
	});

	it('enables button when checkbox is checked', async () => {
		const user = userEvent.setup();
		render(<SummaryForm />);

		const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
		const confirmButton = screen.getByRole('button', { name: /confirm order/i });

		await user.click(checkbox);
		expect(confirmButton).toBeEnabled();

		await user.click(checkbox);
		expect(confirmButton).toBeDisabled();
	});
});

it('shows the tooltip on hover', async () => {
	const user = userEvent.setup();
	render(<SummaryForm />);

	const tooltipText = /see matt for details/i;
	expect(screen.queryByText(tooltipText)).not.toBeInTheDocument();

	await user.hover(screen.getByText(/terms and conditions/i));
	expect(screen.getByText(tooltipText)).toBeInTheDocument();

	await user.unhover(screen.getByText(/terms and conditions/i));
	expect(screen.queryByText(tooltipText)).not.toBeInTheDocument();
});
