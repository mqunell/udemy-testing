import { formatCurrency } from './OptionLayout';

describe('formatCurrency', () => {
	it('formats USD correctly', () => {
		expect(formatCurrency(1.5)).toBe('$1.50');
		expect(formatCurrency(2)).toBe('$2.00');
		expect(formatCurrency(10)).toBe('$10.00');
	});
});
