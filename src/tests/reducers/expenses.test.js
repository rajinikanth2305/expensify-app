import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"

test("should set default action",()=>
{
    const state=expensesReducer(undefined,{type:"@@INIT"})
    expect(state).toEqual([]);

})


test("should remove expense by id",()=>
{
    const action={
        type:"REMOVE_EXPENSE",
        id:expenses[1].id
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(
        [
          expenses[0],
          expenses[2]
        ]

    )
})
test("should not remove expense if id not found",()=>
{
    const action={
        type:"REMOVE_EXPENSE",
        id:'-1'
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
})
//adding an expenses
test("should adding an expense to array",()=>
{
    const expense=
    {
        id:"4",
        description:"internet bill",
        note:"paid by venkatesh and kirit reddy",
        amount:250,
        createAt:0
 
    };
    const action={
        type:"ADD_EXPENSE",
        expense
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
})
//should edit an expense
test("should edit an expense to array with valid id",()=>
{
    const amount=1000;
    
    const action={
        type:"EDIT_EXPENSE",
        id:expenses[1].id,
        updates:
        {
            amount
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state[1].amount).toEqual(amount);
})

//should not edit expense if id is not found

test("should not edit an expense to array with invalid id",()=>
{
    const amount=1000;
    
    const action={
        type:"EDIT_EXPENSE",
        id:"10",
        updates:
        {
            amount
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})

test("should set expenses",()=>
{
    const action={
        type:"SET_EXPENSES",
        expenses:[expenses[1]]
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1]])
})