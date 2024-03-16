import { useEffect, useState } from 'react';

const Options = ({ optionType }: { optionType: 'scoops' | 'toppings' }) => {
	const [items, setItems] = useState<Option[] | null>([]);

	useEffect(() => {
		const getItems = async () => {
			try {
				const res = await fetch(`/api/${optionType}`);
				const data = await res.json();
				setItems(data);
			} catch (error) {
				setItems(null);
			}
		};

		getItems();
	}, [optionType]);

	if (items === null) {
		return <div role="alert">Please try again.</div>;
	}

	return (
		<div>
			{items.map(({ name, imagePath }) => (
				<div key={name} className="flex flex-col gap-1">
					<span>{name}</span>
					<img src={imagePath} alt={`${name} ${optionType.slice(0, -1)}`} />
				</div>
			))}
		</div>
	);
};

export default Options;
