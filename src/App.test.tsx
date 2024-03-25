import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Test will now fail because the App component is not rendering the "learn react" link.
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/* 
TODO: Update tests to reflect the actual components we are building.
- Most likely we will need to check that data is formatted properly and displayed on the screen for the weather. 
- Will need to create a tests with mock data for the weather API call as well. 
*/