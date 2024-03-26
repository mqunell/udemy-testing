import Options from './Options';

const OrderPage = () => {
	return (
		<div className="flex flex-col items-start gap-4 p-4">
			<h1 className="text-xl">Design your Sundae!</h1>
			<Options optType="scoops" />
			<Options optType="toppings" />
		</div>
	);
};

export default OrderPage;
