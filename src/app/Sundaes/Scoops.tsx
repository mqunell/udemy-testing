import OptionLayout from './OptionLayout';
import useSundaeOptions from './useSundaeOptions';

export const SCOOP_PRICE = 2.0;

const Scoops = () => {
	const { data, loading, error } = useSundaeOptions('scoops');

	if (error) {
		return <div role="alert">Error fetching scoops. Please try again.</div>;
	}

	return (
		<OptionLayout title="Scoops" price={SCOOP_PRICE}>
			{data.map(({ name, imagePath }) => (
				<div key={name} className="flex flex-col gap-1">
					{/* eslint-disable-next-line */}
					<img
						src={imagePath}
						alt={`${name} scoop`}
						className="size-40 border border-black"
					/>
					<span>{name}</span>
				</div>
			))}
		</OptionLayout>
	);
};

export default Scoops;
