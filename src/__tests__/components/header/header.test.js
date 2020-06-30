import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../../../components/header/header.js';

describe('<Header />', ()=>{
    it('exists at the start of our application',()=>{
        let app = shallow(<Header />);
        expect(app.find('h1').exists()).toBeTruthy();
    });
    it('renders correctly', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});