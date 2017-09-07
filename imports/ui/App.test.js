import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App.js'

let props = { }

describe('Terms', () => {
  const app = shallow(<App {...props} />);
 
  it('<App /> should render', () => {
    
    expect(app.exists()).toBe(true)
  });
});