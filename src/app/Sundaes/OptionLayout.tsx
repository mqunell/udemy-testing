export const formatCurrency = (currency: number): string => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	}).format(currency);
};

const OptionLayout = ({
	title,
	price,
	children,
}: {
	title: string;
	price: number;
	children: React.ReactNode;
}) => (
	<section className="flex flex-col gap-2">
		<h2 className="text-lg">{title}</h2>
		<p>{formatCurrency(price)} each</p>

		<div className="flex gap-8">{children}</div>
	</section>
);

export default OptionLayout;
