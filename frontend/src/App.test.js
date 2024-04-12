import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders spinning book icon', () => {
  render(<Header />);
  const headerIcon = screen.getByAltText(/logo/i);
  expect(headerIcon).toBeInTheDocument();
});
