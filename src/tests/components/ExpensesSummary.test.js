import React from "react"
import {shallow} from "enzyme";
import {ViewTotalExpenses} from "../../components/ExpensesSummary"


test("should correctley render expenses summary with one expense",()=>

{

const wrapper=shallow(<ViewTotalExpenses total={100} length={1} />)
expect(wrapper).toMatchSnapshot();
})

test("should correctley render expenses summary with multiple expenses",()=>
{
    const wrapper=shallow(<ViewTotalExpenses total={60572} length={20} />)
    expect(wrapper).toMatchSnapshot();
    
})