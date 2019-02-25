import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './index';
import { render, cleanup } from 'react-testing-library'


afterEach(cleanup)


describe('ListItem rendering for social feed', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListItem author='camilo' content='Test content' date='Fri Dec 29 19:15:04 +0000 2017' ></ListItem>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    it("should contain author's name", () => {
        const { getByText } = render(<ListItem author='camilo' content='Test content' date='Fri Dec 29 19:15:04 +0000 2017' ></ListItem>)
        getByText('camilo')
    }) ;

    it("should contain display feed content", () => {
        const { getByText } = render(<ListItem author='camilo' content='Test content' date='Fri Dec 29 19:15:04 +0000 2017' ></ListItem>)
        getByText('Test content')
    }) ;
});
