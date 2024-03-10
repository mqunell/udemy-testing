import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tooltip from './page';

it('works?', async () => {
	render(<Tooltip />);
	expect(screen.getByText('Tooltip')).not.toBeVisible(); // Fails when `group-hover:block` is used

	// const user = userEvent.setup();
	// await user.hover(screen.getByText('Trigger'));
	// expect(screen.getByText('Tooltip')).toBeVisible();
});
