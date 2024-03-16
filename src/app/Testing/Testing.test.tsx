import { render, screen, logRoles } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip, AlertDiv, AlertButton } from './page';

test('Tailwind group class', async () => {
	render(<Tooltip />);
	expect(screen.getByText('Tooltip')).not.toBeVisible(); // Fails when `group-hover:block` is used

	// const user = userEvent.setup();
	// await user.hover(screen.getByText('Trigger'));
	// expect(screen.getByText('Tooltip')).toBeVisible();
});

test('manually applying role', () => {
	const { container } = render(<AlertDiv />);
	// screen.getByRole('alert', { name: 'Please try again.' });
	screen.getByRole('alert');
	screen.getByText('Please try again.');
	logRoles(container);
});

test('same thing on a button', () => {
	render(<AlertButton />);
	screen.getByRole('button', { name: 'Try again' });
});
