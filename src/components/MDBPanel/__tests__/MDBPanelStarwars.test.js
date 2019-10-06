import {configure, render} from 'enzyme';
import React from 'react';
import MDBPanelStarwars from '../MDBPanelStarwars';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<MDBPanelStarwars /> component tests', () => {
    it('expect component to mount', () => {
        const about = render(<MDBPanelStarwars />);
        expect(about).toBeTruthy();
    });
    
    it('match snapshot', () => {
        const about = render(<MDBPanelStarwars />);
        expect(about).toMatchSnapshot();
    })
});