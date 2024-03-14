import { http, HttpResponse } from 'msw';

export const handlers = [
	http.get('/api/scoops', () => {
		const scoops: Option[] = [
			{ name: 'Chocolate', imagePath: '/images/chocolate.png' },
			{ name: 'Vanilla', imagePath: '/images/vanilla.png' },
		];

		return HttpResponse.json(scoops);
	}),

	http.get('/api/toppings', () => {
		const toppings: Option[] = [
			{ name: 'Cherries', imagePath: '/images/cherries.png' },
			{ name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
			{ name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },
		];

		return HttpResponse.json(toppings);
	}),
];
