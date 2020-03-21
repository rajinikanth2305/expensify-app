import React from "react"
import {shallow} from "enzyme"
import moment from "moment";
import expenses from "../fixtures/expenses"
import ExpenseForm from "../../components/ExpenseForm";
test("should render expense form correctley",()=>
{
    const wrapper =shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();

})


//should render expense form with expense data

test("should render expense form correctley with expense data",()=>
{
    const wrapper =shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();

})
test("should render error invalid for form submission",()=>
{
    const wrapper =shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>
        {

        }
    })

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

})

test("should set description on input change",()=>
{
    const value="new description"
    const wrapper =shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change',
    {
        target:
        {
            value
        }
    })
    expect(wrapper.state('description')).toBe(value);
})

test("should set note on input change",()=>
{
    const value="paid by venkatesg"
    const wrapper =shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change',
    {
        target:
        {
            value
        }
    })
    expect(wrapper.state('note')).toBe(value);
})

//2 test cases for amount
//one for valid and one for 
//should set amount for valid input

test("should set amount for valid input",()=>
{
    const value='12'
    const wrapper =shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',
    {
        target:
        {
            value
        }
    })
    expect(wrapper.state('amount')).toBe(value);
})

//not set amount for invalid input

test("should not set amount for invalid input",()=>
{
    const value='12.560'
    const wrapper =shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',
    {
        target:
        {
            value
        }
    })
    expect(wrapper.state('amount')).toBe('');
})

test("should call onsubmit prop for submit form submission",()=>
{
    const onSubmitSpy=jest.fn();
    const wrapper =shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>
        {

        }
    })
    expect(wrapper.state('error')).toBe("")
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
        {
            description:expenses[0].description,
            amount:expenses[0].amount,
            note:expenses[0].note,
            createAt:expenses[0].createAt


})
});
test("should set new date on date change",()=>
{
    const now=moment();
    const wrapper =shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createAt')).toEqual(now);

})


//should set calander focused on change

test("should set calander focused on change",()=>
{
    const focused=true
    const wrapper =shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calanderFocused')).toEqual(focused);


})
//wrapper.find().at(0) is used for index range to fetch an input element
//simulate function is used for onchange and onsubmit functions to call
//and we are assigning taregt object with value
//expect(wrapper.state("")) is used find the state value for particular state
//we can simulate the events and we can pass the function to that simulate and also we can set object for that event value
//20th MArch:2020
//leanred about spys and mock functions 
//we used spys to call onsubmit function for example we have to call this.props.onSubmit function to pass the expense object and for that we are using spy functions
//spys functions can called any number of times and to initialize it we have to call jst.fn()
//to set a prop on component we have to call  (wrapper.find('SingleDatePicker').prop('onFocusChange')({focused}))
//In above example onFocusChane is prop and we are passing value to the prop and focused is a object we are passing to that prop;

