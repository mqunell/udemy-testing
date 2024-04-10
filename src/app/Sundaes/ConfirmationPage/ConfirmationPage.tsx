import { useEffect, useState } from 'react';
import { useOrderDetails } from '../OrderDetails';
import Button from '../components/Button';

const ConfirmationPage = () => {
	const { resetOrder, setOrderPhase } = useOrderDetails();
	const [orderNumber, setOrderNumber] = useState<string | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch('/api/order', { method: 'post' });
				const data = await res.json();
				setOrderNumber(data.orderNumber);
			} catch (error) {
				setOrderNumber(null);
			}
		})();
	}, []);

	if (!orderNumber) return <p>Loading...</p>;

	return (
		<section className="flex flex-col items-center gap-4 p-4 text-center">
			<h1 className="text-xl">Thank you!</h1>
			<div>
				<p>Your order number is {orderNumber}</p>
				<p className="text-xs">
					as per our terms and conditions, nothing will happen now
				</p>
			</div>

			<Button
				onClick={() => {
					resetOrder();
					setOrderPhase('order');
				}}
			>
				Create new order
			</Button>
		</section>
	);
};

export default ConfirmationPage;
