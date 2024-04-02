import { useOrderDetails } from '../OrderDetails';
import { formatCurrency } from '../utils';
import SummaryForm from './SummaryForm';

const SubmitPage = () => {
	const { optionCounts, totals } = useOrderDetails();

	return (
		<section>
			<h1>Order Summary</h1>
			<h2>Scoops: {formatCurrency(totals.scoops)}</h2>
			<ul>
				{Object.entries(optionCounts.scoops).map(([name, count]) => (
					<li key={name}>
						{count} {name}
					</li>
				))}
			</ul>

			<h2>Toppings: {formatCurrency(totals.toppings)}</h2>
			<ul>
				{Object.entries(optionCounts.toppings).map(([name, count]) => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<SummaryForm />
		</section>
	);
};

export default SubmitPage;
