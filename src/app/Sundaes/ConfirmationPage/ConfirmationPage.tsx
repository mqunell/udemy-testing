import { useEffect, useState } from 'react';

const ConfirmationPage = () => {
	const [orderNumber, setOrderNumber] = useState(null);

	useEffect(() => {
		// fetch order number and update state
	}, []);

	if (!orderNumber) return <p>Loading...</p>;

	return (
		<section>
			<h1>Thank you!</h1>
			<p>Your order number is {orderNumber}</p>
			<p className="text-sm">as per our terms and conditions, nothing will happen now</p>
			<input type="button">Create new order</input>
		</section>
	);
};

export default ConfirmationPage;
