import {configure, shallow} from 'enzyme';
import React from 'react';
import MDBPills from '../MDBPills';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<MDBPills /> component tests', () => {
    it('expect component to mount', () => {
        const about = shallow(<MDBPills />);
        expect(about).toBeTruthy();
    });
    
    it('match snapshot', () => {
        const about = shallow(<MDBPills />);
        expect(about).toMatchSnapshot();
    })
});