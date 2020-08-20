import React from 'react';
import { render } from '@testing-library/react';
import Calculadora from './Calculadora';

test('renders learn react link', () => {
  const { getByText } = render(<Calculadora />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
