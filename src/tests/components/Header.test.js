import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={()=>
  {

  }} />);
  expect(wrapper).toMatchSnapshot();
});


test("should call startLogout on button click",()=>
{
  const startLogout=jest.fn();
  const wrapper=shallow(<Header startLogout={startLogout} />);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();


})


//snapshot allows to track changes in data
//renderer function takes render function and it prints the output for component
//we have to install ReactShallowRender for testing the components
//library called nyzyme  for airbnb to actually writing test cases
//step 1 to install  