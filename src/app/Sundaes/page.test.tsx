import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from './page';

describe('App', () => {
	it('goes through order phases', async () => {
		// render app
		// add scoops and toppings
		// click order button
		// check summary information based on order
		// accept terms and conditions
		// confirm order number
		// click "new order" button
		// check that scoops and toppings subtotals were reset
	});
});

// screen.debug() shows the DOM

// import { logRoles } from ...;
// const { container } = render(...);
// logRoles(container);
