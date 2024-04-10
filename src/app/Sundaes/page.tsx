'use client';

import ConfirmationPage from './ConfirmationPage/ConfirmationPage';
import { OrderDetailsProvider, useOrderDetails } from './OrderDetails';
import OrderPage from './OrderPage/OrderPage';
import SubmitPage from './SubmitPage/SubmitPage';

const PhaseHandler = () => {
	const { orderPhase } = useOrderDetails();

	switch (orderPhase) {
		case 'order':
			return <OrderPage />;
		case 'submit':
			return <SubmitPage />;
		case 'confirmation':
			return <ConfirmationPage />;
	}
};

const Sundaes = () => (
	<OrderDetailsProvider>
		<PhaseHandler />
	</OrderDetailsProvider>
);

export default Sundaes;
