import React from 'react';
import { shallow } from 'enzyme';
import NotPage from '../../components/NotPage';

test('should render not page correctly', () => {
  const wrapper = shallow(<NotPage />);
  expect(wrapper).toMatchSnapshot();
});




//snapshot allows to track changes in data
//renderer function takes render function and it prints the output for component
//we have to install ReactShallowRender for testing the components
//library called nyzyme  for airbnb to actually writing test cases
//step 1 to install  