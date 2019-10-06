import {configure, shallow} from 'enzyme';
import React from 'react';
import Links from '../Links';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Links /> component tests', () => {
    it('expect component to mount', () => {
        const about = shallow(<Links />);
        expect(about).toBeTruthy();
    });
    
    it('match snapshot', () => {
        const about = shallow(<Links />);
        expect(about).toMatchSnapshot();
    })
});