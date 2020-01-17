import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('Get homepage title', () => {
  const { getByText } = render(<App />);
  getByText(/Women's World Cup/i);
  console.log(component);
  });

  test('toggle loads dark mode', () => {
    const { getByTestId } = render(<App/>);
    getByTestId("toggle-element");
  })