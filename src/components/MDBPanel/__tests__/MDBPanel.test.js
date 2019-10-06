import {configure, render} from 'enzyme';
import React from 'react';
import MDBPanel from '../MDBPanel';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<MDBPanel /> component tests', () => {
    it('expect component to mount', () => {
        const about = render(<MDBPanel isGeolocationEnabled={false} isGeolocationAvailable={false} />);
        expect(about).toBeTruthy();
    });
    
    it('match snapshot', () => {
        const about = render(<MDBPanel isGeolocationEnabled={false} isGeolocationAvailable={false}  />);
        expect(about).toMatchSnapshot();
    })
});