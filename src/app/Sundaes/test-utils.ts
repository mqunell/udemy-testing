import { render } from '@testing-library/react';
import { OrderDetailsProvider } from './OrderDetails';

const renderWithContext = (ui: React.ReactElement, options?: any) => {
	return render(ui, { wrapper: OrderDetailsProvider, ...options });
};

export * from '@testing-library/react';
export { renderWithContext as render };
