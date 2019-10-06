import {configure, shallow} from 'enzyme';
import React from 'react';
import MDBJumbotron from '../MDBJumbotron';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<MDBJumbotron /> component tests', () => {
    it('expect component to mount', () => {
        const about = shallow(<MDBJumbotron />);
        expect(about).toBeTruthy();
    });
    
    it('match snapshot', () => {
        const about = shallow(<MDBJumbotron />);
        expect(about).toMatchSnapshot();
    })
});