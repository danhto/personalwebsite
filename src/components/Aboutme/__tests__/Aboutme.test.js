import {configure, shallow} from 'enzyme';
import React from 'react';
import Aboutme from '../Aboutme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Aboutme /> component tests', () => {
    it('expect component to mount', () => {
        const about = shallow(<Aboutme />);
        expect(about).toBeTruthy();
    });
    
    it('match snapshot', () => {
        const about = shallow(<Aboutme />);
        expect(about).toMatchSnapshot();
    })
});
