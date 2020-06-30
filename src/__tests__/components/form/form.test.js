import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../../../components/form/form';

describe('<Form>', () => {

  it('is alive at application start', () => {
    const form = shallow(<Form />);
    expect(form.find('main form div input').exists()).toBeTruthy();
    expect(form.find('.method').exists()).toBeTruthy();
    expect(form.find('.results').exists()).toBeTruthy();
  });

  it('properly store the users input into state', () => {
    const form = mount(<Form />);
    const urlInput = form.find('.input');
    const methodInput = form.find('.methodGet');
    urlInput.simulate('change',{ target: { value: 'url' } });
    methodInput.simulate('click');
    expect(form.state('url')).toEqual('url');
    expect(form.state('method')).toEqual('get');
  });

  it('properly clear the form/state after the form is submitted', () => {
    const form = mount(<Form />);
    const button = form.find('button');
    button.simulate('submit');
    expect(form.state('method')).toBeFalsy();
    expect(form.state('url')).toBeFalsy();
  });

  it('properly display the output on form submit', () => {
    const form = mount(<Form />);
    const button = form.find('button');
    const urlInput = form.find('.input');
    const methodInput = form.find('.methodGet');
    urlInput.simulate('change',{ target: { value: 'url' } });
    methodInput.simulate('click');
    button.simulate('submit');
    expect(form.find('.methodOutput').text()).toContain('get');
    expect(form.find('.urlOutput').text()).toContain('url');
  });

  it('Renders correctly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});