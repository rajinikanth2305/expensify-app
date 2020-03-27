import React from "react"
import {shallow} from 'enzyme'
import  expenses from "../fixtures/expenses";
import {EditExpensePage} from "../../components/EditExpensePage";
let startEditExpense,removeExpense,startRemoveExpense,history,wrapper;
beforeEach(()=>
{
    startEditExpense=jest.fn();
    startRemoveExpense=jest.fn();
    history={push:jest.fn()};
    wrapper=shallow(<EditExpensePage expense={expenses[0]} startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} />)
}
)
test("should render edit expense page properly",()=>
{
    expect(wrapper).toMatchSnapshot();
})

//shouuld handle editexpense
test("should handle edit expense page properly",()=>
{

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]); //passing parameter to spy function here
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])
})
//spy

//should handle removeexpense

test("should handle remove expense page properly",()=>
{

    wrapper.find('button').prop('onClick')(expenses[0].id);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[0].id})
})
//spy