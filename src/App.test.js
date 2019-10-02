import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';

it('renders without crashing', () => {
  const mock = new MockAdapter(axios);
  mock.onGet('/home').reply(200, {"value": "Hello World!"});
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
