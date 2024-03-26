import { useOrderDetails } from '../OrderDetails';

const ToppingOption = ({ name, imagePath }: ApiOption): JSX.Element => {
	const optType: OptionType = 'toppings';
	const { updateItemCount } = useOrderDetails();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target;
		updateItemCount(optType, name, checked ? 1 : 0);
	};

	return (
		<div className="flex flex-col gap-2 rounded bg-sky-200 p-3">
			{/* eslint-disable-next-line */}
			<img src={imagePath} alt={`${name} topping`} className="size-40 bg-white" />
			<label className="flex justify-between bg-white px-2 py-1">
				{name}
				<input
					type="checkbox"
					className="w-12 border border-black"
					onChange={handleChange}
				/>
			</label>
		</div>
	);
};

export default ToppingOption;
