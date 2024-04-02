import { useOrderDetails } from '../OrderDetails';

const ScoopOption = ({ name, imagePath }: ApiOption): JSX.Element => {
	const optType: OptionType = 'scoops';
	const { updateItemCount } = useOrderDetails();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let newCount = parseInt(event.target.value);
		if (!newCount || newCount < 0) newCount = 0;
		updateItemCount(optType, name, newCount);
	};

	return (
		<div className="flex flex-col gap-2 rounded bg-sky-200 p-3">
			{/* eslint-disable-next-line */}
			<img src={imagePath} alt={`${name} scoop`} className="size-40 bg-white" />
			<label className="flex justify-between bg-white px-2 py-1">
				{name}
				<input
					type="number"
					defaultValue={0}
					min={0}
					className="w-12 border border-black"
					onChange={handleChange}
				/>
			</label>
		</div>
	);
};

export default ScoopOption;
