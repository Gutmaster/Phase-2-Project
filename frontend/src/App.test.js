import { render, screen, waitFor } from '@testing-library/react';
import Header from './Header';
import Library from './Library';

test('renders spinning book icon', () => {
  render(<Header />);
  const headerIcon = screen.getByAltText(/logo/i);
  expect(headerIcon).toBeInTheDocument();
});

test('displays library of books', async () => {
  render(<Library />);

  await waitFor(() => {
    const books = screen.getAllByTitle(/title/i);
    expect(books.length).toBeGreaterThan(0);
  });
});