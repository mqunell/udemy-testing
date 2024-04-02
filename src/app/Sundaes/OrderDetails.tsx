import { createContext, useContext, useState } from 'react';
import { PRICES } from './constants';

// Create the Context
const OrderDetails = createContext<OrderDetailsContextType | null>(null);

// Custom hook for accessing the Context values - this is what child components will use
export const useOrderDetails = () => {
	const contextValue = useContext(OrderDetails);

	if (!contextValue) {
		throw new Error('useOrderDetails must be called from within an OrderDetailsProvider');
	}

	return contextValue;
};

// Context Provider with internal state, getters, and settings - this wraps applicable components
export const OrderDetailsProvider = (props: any) => {
	const [optionCounts, setOptionCounts] = useState<{
		scoops: { [key: string]: number };
		toppings: { [key: string]: number };
	}>({ scoops: {}, toppings: {} });

	const updateItemCount = (optType: OptionType, itemName: string, newCount: number) => {
		const newOptionCounts = { ...optionCounts };
		newOptionCounts[optType][itemName] = newCount;
		setOptionCounts(newOptionCounts);
	};

	const resetOrder = () => setOptionCounts({ scoops: {}, toppings: {} });

	const calculateTotal = (optType: OptionType): number => {
		const optCounts = Object.values(optionCounts[optType]);
		const optTotal = optCounts.reduce((acc, val) => acc + val, 0);
		return optTotal * PRICES[optType];
	};

	const totals = {
		scoops: calculateTotal('scoops'),
		toppings: calculateTotal('toppings'),
	};

	const value: OrderDetailsContextType = {
		optionCounts,
		totals,
		updateItemCount,
		resetOrder,
	};

	return <OrderDetails.Provider value={value} {...props} />;
};
