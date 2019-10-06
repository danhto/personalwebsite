import {configure, shallow} from 'enzyme';
import React from 'react';
import Navigation from '../Navigation';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Navigation /> component tests', () => {
    it('expect component to mount', () => {
        const about = shallow(<Navigation />);
        expect(about).toBeTruthy();
    });
    
    it('match snapshot', () => {
        const about = shallow(<Navigation />);
        expect(about).toMatchSnapshot();
    })
});