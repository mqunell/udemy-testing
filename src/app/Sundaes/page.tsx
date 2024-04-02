'use client';

import { OrderDetailsProvider } from './OrderDetails';
import OrderPage from './OrderPage/OrderPage';

const Sundaes = () => {
	return (
		<OrderDetailsProvider>
			<OrderPage />
		</OrderDetailsProvider>
	);
};

export default Sundaes;
