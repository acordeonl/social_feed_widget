import React from 'react';
import ReactDOM from 'react-dom';
import Settings from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Settings ></Settings>, div);
  ReactDOM.unmountComponentAtNode(div);
});
