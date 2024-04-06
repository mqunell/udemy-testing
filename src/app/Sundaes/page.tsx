'use client';

import { useState } from 'react';
import ConfirmationPage from './ConfirmationPage/ConfirmationPage';
import { OrderDetailsProvider } from './OrderDetails';
import OrderPage from './OrderPage/OrderPage';
import SubmitPage from './SubmitPage/SubmitPage';

type OrderPhase = 'order' | 'submit' | 'confirmation';

const Sundaes = () => {
	const [orderPhase, setOrderPhase] = useState<OrderPhase>('order');

	return (
		<OrderDetailsProvider>
			{/* todo: pass setOrderPhase (or wrapper) to each of these */}
			{orderPhase === 'order' && <OrderPage />}
			{orderPhase === 'submit' && <SubmitPage />}
			{orderPhase === 'confirmation' && <ConfirmationPage />}
		</OrderDetailsProvider>
	);
};

export default Sundaes;
