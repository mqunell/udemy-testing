import { useOrderDetails } from '../OrderDetails';
import { formatCurrency } from '../utils';
import Options from './Options';

const OrderPage = () => {
	const { totals } = useOrderDetails();
	const grandTotal = totals.scoops + totals.toppings;

	return (
		<div className="flex flex-col items-start gap-4 p-4">
			<h1 className="text-xl">Design your Sundae!</h1>
			<Options optType="scoops" />
			<Options optType="toppings" />
			<section>
				<h2>Grand total: {formatCurrency(grandTotal)}</h2>
			</section>
		</div>
	);
};

export default OrderPage;
