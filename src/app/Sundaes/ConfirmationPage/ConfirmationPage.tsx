import { useEffect, useState } from 'react';

const ConfirmationPage = () => {
	const [orderNumber, setOrderNumber] = useState<string | null>(null);

	useEffect(() => {
		// fetch order number and update state
		// setOrderNumber('12345');
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

			<button className="rounded bg-blue-500 px-2 py-1 text-white enabled:hover:ring-2 enabled:hover:ring-blue-600 disabled:bg-slate-500">
				Create new order
			</button>
		</section>
	);
};

export default ConfirmationPage;
