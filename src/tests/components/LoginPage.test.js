import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test('should render Login Page correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogin on button click",()=>
{
  const startLogin=jest.fn();
  const wrapper=shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();


})




//snapshot allows to track changes in data
//renderer function takes render function and it prints the output for component
//we have to install ReactShallowRender for testing the components
//library called nyzyme  for airbnb to actually writing test cases
//step 1 to install  