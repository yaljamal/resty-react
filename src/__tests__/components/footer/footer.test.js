import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../../../components/footer/footer.js';

describe('<Footer />', ()=>{
    it('exists at the start of our application',()=>{
        let app = shallow(<Footer />);
        expect(app.find('p').exists()).toBeTruthy();
    });
    it('renders correctly', () => {
        const tree = renderer.create(<Footer />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});