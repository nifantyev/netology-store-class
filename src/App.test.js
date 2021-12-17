import { render, screen } from '@testing-library/react';
import App from './App';

test('renders add to cart button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/добавить в корзину/i);
  expect(buttonElement).toBeInTheDocument();
});
