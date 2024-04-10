import { delay, http, HttpResponse } from 'msw';

export const handlers = [
	http.get('/api/scoops', () => {
		const scoops: ApiOption[] = [
			{ name: 'Chocolate', imagePath: '/images/chocolate.png' },
			{ name: 'Vanilla', imagePath: '/images/vanilla.png' },
		];

		return HttpResponse.json(scoops);
	}),

	http.get('/api/toppings', () => {
		const toppings: ApiOption[] = [
			{ name: 'Cherries', imagePath: '/images/cherries.png' },
			{ name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
			{ name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },
		];

		return HttpResponse.json(toppings);
	}),

	http.post('/api/order', async () => {
		await delay(100);
		return HttpResponse.json({ orderNumber: '12345' }, { status: 200 });
	}),
];
