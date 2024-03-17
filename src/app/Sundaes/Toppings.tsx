import OptionLayout from './OptionLayout';
import useSundaeOptions from './useSundaeOptions';

export const TOPPING_PRICE = 1.5;

const Toppings = () => {
	const { data, loading, error } = useSundaeOptions('toppings');

	if (error) {
		return <div role="alert">Error fetching toppings. Please try again.</div>;
	}

	return (
		<OptionLayout title="Toppings" price={TOPPING_PRICE}>
			{data.map(({ name, imagePath }) => (
				<div key={name} className="flex flex-col gap-1">
					{/* eslint-disable-next-line */}
					<img
						src={imagePath}
						alt={`${name} topping`}
						className="size-40 border border-black"
					/>
					<span>{name}</span>
				</div>
			))}
		</OptionLayout>
	);
};

export default Toppings;
