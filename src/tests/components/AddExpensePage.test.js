import React from "react";
import {shallow} from "enzyme";
import  expenses from "../fixtures/expenses";
import {AddExpensePage} from "../../components/AddExpense";
let startAddExpense,history,wrapper;
beforeEach(()=>
{
     startAddExpense=jest.fn();
     history={push:jest.fn()};
     wrapper=shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
}
)

test("should render add expense page correctley",()=>
{
    expect(wrapper).toMatchSnapshot();
})
test("should handle on submit",()=>
{
    
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})


///jest life cycle methods

//afterAll aftereach,beforeall,beforeeach