import { useEffect, useState } from 'react';

const useSundaeOptions = (optionType: 'scoops' | 'toppings') => {
	const [state, setState] = useState({
		data: [],
		loading: false,
		error: false,
	});

	useEffect(() => {
		(async () => {
			setState({ ...state, loading: true });

			try {
				const res = await fetch(`/api/${optionType}`);
				const data = await res.json();
				setState({ data, loading: false, error: false });
			} catch (error) {
				// console.log('fetch error', error);
				setState({ data: [], loading: false, error: true });
			}
		})();
	}, [optionType]);

	return state;
};

export default useSundaeOptions;
