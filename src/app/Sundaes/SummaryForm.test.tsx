import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from './SummaryForm';

describe('SummaryForm', () => {
	it('starts with t&c unchecked and button disabled', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
		expect(checkbox).not.toBeChecked();

		const confirmButton = screen.getByRole('button', { name: /confirm order/i });
		expect(confirmButton).toBeDisabled();
	});

	it('enables button when checkbox is checked', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
		const confirmButton = screen.getByRole('button', { name: /confirm order/i });

		fireEvent.click(checkbox);
		expect(confirmButton).toBeEnabled();

		fireEvent.click(checkbox);
		expect(confirmButton).toBeDisabled();
	});
});
