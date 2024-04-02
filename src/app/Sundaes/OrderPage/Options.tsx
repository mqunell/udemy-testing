import { useEffect, useState } from 'react';
import { useOrderDetails } from '../OrderDetails';
import { PRICES } from '../constants';
import { formatCurrency } from '../utils';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';

const Options = ({ optType }: { optType: OptionType }) => {
	const { totals } = useOrderDetails();
	const [options, setOptions] = useState<ApiOption[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(`/api/${optType}`);
				const data: ApiOption[] = await res.json();
				setOptions(data);
			} catch (error) {
				setError('An unexpected error occurred. Please try again.');
			}
		})();
	}, [optType]);

	if (error) {
		return <div role="alert">{error}</div>;
	}

	const ItemComponent = optType === 'scoops' ? ScoopOption : ToppingOption;
	const title = optType[0].toUpperCase() + optType.slice(1);

	return (
		<section className="flex flex-col gap-2">
			<h2 className="text-lg">{title}</h2>
			<p>{formatCurrency(PRICES[optType])} each</p>
			<p>
				{title} subtotal: {formatCurrency(totals[optType])}
			</p>

			<div className="flex gap-8">
				{options.map(({ name, imagePath }) => (
					<ItemComponent key={name} name={name} imagePath={imagePath} />
				))}
			</div>
		</section>
	);
};

export default Options;
