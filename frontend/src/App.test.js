import { render, screen, waitFor } from '@testing-library/react';

import Library from './pages/Library';
import Home from './pages/Home';

test('renders spinning book icon', () => {
  render(<Home />);
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

// test('displays links to Library and Donation Pages', () => {
//   render(<Home />);
//   const libraryLink = screen.getByText(/library/i);
//   const donationLink = screen.getByText(/donate/i);
//   expect(libraryLink).toBeInTheDocument();
//   expect(donationLink).toBeInTheDocument();
// });