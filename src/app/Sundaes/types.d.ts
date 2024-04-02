type OptionType = 'scoops' | 'toppings';

type ApiOption = {
	name: string;
	imagePath: string;
};

type OrderDetailsContextType = {
	optionCounts: {
		scoops: { [key: string]: number };
		toppings: { [key: string]: number };
	};
	totals: {
		scoops: number;
		toppings: number;
	};
	updateItemCount: (optType: OptionType, itemName: string, newCount: number) => void;
	resetOrder: () => void;
};
