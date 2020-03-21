import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseDashBoard from '../../components/ExpenseDashBoard';
test("should render expense dashboard as exactly",()=>
{
    const wrapper=shallow(<ExpenseDashBoard />);
    expect(wrapper).toMatchSnapshot();


})