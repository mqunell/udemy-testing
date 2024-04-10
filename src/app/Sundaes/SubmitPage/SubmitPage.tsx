import { useOrderDetails } from '../OrderDetails';
import { formatCurrency } from '../utils';
import SummaryForm from './SummaryForm';

const SubmitPage = () => {
	const { optionCounts, totals } = useOrderDetails();
	const grandTotal = totals.scoops + totals.toppings;

	return (
		<section className="flex flex-col items-start gap-4 p-4">
			<h1 className="text-xl">Order Summary</h1>
			<h2 className="text-lg">Scoops: {formatCurrency(totals.scoops)}</h2>
			<ul>
				{Object.entries(optionCounts.scoops).map(([name, count]) => (
					<li key={name}>
						{count} {name}
					</li>
				))}
			</ul>

			<h2 className="text-lg">Toppings: {formatCurrency(totals.toppings)}</h2>
			<ul>
				{Object.entries(optionCounts.toppings).map(([name, count]) => (
					<li key={name}>{name}</li>
				))}
			</ul>

			<h2 className="text-lg">Grand total: {formatCurrency(grandTotal)}</h2>

			<SummaryForm />
		</section>
	);
};

export default SubmitPage;
