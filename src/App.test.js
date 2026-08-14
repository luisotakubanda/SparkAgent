// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SparkAgent title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SparkAgent/i);
    expect(titleElement).toBeInTheDocument();
});
