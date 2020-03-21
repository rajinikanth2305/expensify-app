import {addExpense,editExpense,removeExpense} from "../../actions/expenses"


test("should set up remove expense action object",()=>
{
    const action=removeExpense({id:"123abc"});
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:"123abc"

    });
}
)

test("should set up to test for edit expense",()=>
{
    const action=editExpense("123",{description:"chciken bill",amount:500});
    expect(action).toEqual(
        {
           type:"EDIT_EXPENSE",
           id:"123",
           updates:{
               description:"chciken bill",
               amount:500

           }
        }
    )
})


test("should set up for add expense action object with provided values",()=>
{
    const expenseData=
    {
        description:"eggs bill",
        amount:500,
        createAt:1200,
        note:"paid by all of them",

    };
    const action=addExpense(expenseData);
    expect(action).toEqual(
        {
            type:"ADD_EXPENSE",
            expense:{
                ...expenseData,
                id:expect.any(String)

        }

})
})
test("should add default values to add expense action",()=>
{
    const expenseData=
    {
        description:"",
        amount:0,
        createAt:0,
        note:"",

    };
    const action=addExpense();
    expect(action).toEqual(
        {
            type:"ADD_EXPENSE",
            expense:
            {
                id:expect.any(String),
                description:"",
                amount:0,
                note:"",
                createAt:0

            }


        }
    )


})





//you will set up test case for edit expense
//make an assertion
// we can use simple update object
//we have to use toEqual to comapre the objects 
//we have to use toBe to compare the boolean and string values
//the jest is used for testing and we have to use for testing in react
