import { useEffect, useState } from 'react';
import { PRICES } from '../constants';
import { formatCurrency } from '../utils';

const Options = ({ optType }: { optType: OptionType }) => {
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

	const title = optType[0].toUpperCase() + optType.slice(1);

	return (
		<section className="flex flex-col gap-2">
			<h2 className="text-lg">{title}</h2>
			<p>{formatCurrency(PRICES[optType])} each</p>
			<p>
				{title} subtotal: {/* formatCurrency(subtotal) */}
			</p>

			<div className="flex gap-8">
				{options.map(({ name, imagePath }) => (
					<div key={name} className="flex flex-col gap-1">
						{/* eslint-disable-next-line */}
						<img
							src={imagePath}
							alt={`${name} ${optType.slice(0, -1)}`}
							className="size-40 border border-black"
						/>
						<span>{name}</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default Options;
