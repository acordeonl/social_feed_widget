import React from 'react';
import ReactDOM from 'react-dom';
import SocialFeed from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialFeed feedUrl='http://api.massrelevance.com/MassRelDemo/kindle.json' numberPosts='3' updateInterval='2'></SocialFeed>, div);
  ReactDOM.unmountComponentAtNode(div);
});
