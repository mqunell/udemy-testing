import { fireEvent, render, screen } from '@testing-library/react';
import ColorButton from './page';

describe('ColorButton', () => {
	test('button click flow', () => {
		render(<ColorButton />);
		const buttonElement = screen.getByRole('button', { name: /blue/i });
		expect(buttonElement).toHaveClass('bg-red-500');

		fireEvent.click(buttonElement);
		expect(buttonElement).toHaveTextContent(/red/i);
		expect(buttonElement).toHaveClass('bg-blue-500');

		fireEvent.click(buttonElement);
		expect(buttonElement).toHaveTextContent(/blue/i);
		expect(buttonElement).toHaveClass('bg-red-500');
	});

	test('checkbox click flow', async () => {
		render(<ColorButton />);

		const buttonElement = screen.getByRole('button', { name: /blue/i });
		const checkboxElement = screen.getByRole('checkbox', { name: /disable button/i });
		expect(buttonElement).toBeEnabled();
		expect(buttonElement).toHaveClass('bg-red-500');
		expect(checkboxElement).not.toBeChecked();

		fireEvent.click(checkboxElement);
		expect(buttonElement).toBeDisabled();
		expect(buttonElement).toHaveClass('bg-gray-500');
		expect(checkboxElement).toBeChecked();

		fireEvent.click(checkboxElement);
		expect(buttonElement).toBeEnabled();
		expect(buttonElement).toHaveClass('bg-red-500');
		expect(checkboxElement).not.toBeChecked();
	});
});
