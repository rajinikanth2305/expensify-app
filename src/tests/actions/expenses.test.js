import {startAddExpense,startRemoveExpense,startSetExpenses,addExpense,setExpenses,editExpense,removeExpense} from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk"
import database from "../../firebase/firebase"


  
const createMockStore=configureMockStore([thunk])

beforeEach((done)=>
{
    const expensesData={};
   expenses.forEach(({id,description,note,amount,createAt})=>
   {
       expensesData[id]={description,note,amount,createAt}
})
    database.ref("expenses").set(expensesData).then(()=>done());
})


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


test("should fetch expenses from firebase",(done)=>
{
    const store=createMockStore({})
    store.dispatch(startSetExpenses()).then(()=>
    {
        const actions=store.getActions();
        expect(actions[0]).toEqual(
            {
                type:"SET_EXPENSES",
                expenses
            }
        );
        done();
    })
})


test("should set up for add expense action object with provided values",()=>
{
    
    const action=addExpense(expenses[2]);
    expect(action).toEqual(
        {
            type:"ADD_EXPENSE",
            expense:expenses[2]
        }
    )

})

test("should add expense to database and store",(done)=>
{
const store=createMockStore({});
const expenseData=
{
    description:"mouse",
    amount:3000,
    note:"paid by all",
    createAt:1000
}
store.dispatch(startAddExpense(expenseData)).then(()=>
{
    const actions=store.getActions()
    expect(actions[0]).toEqual(
        {
            type:"ADD_EXPENSE",
            expense:
            {
                id:expect.any(String),
                ...expenseData
            }
        });
     return database.ref(`expenses/${actions[0].expense.id}`).once("value")
     .then((snapshot)=>
    {
        expect(snapshot.val()).toEqual(expenseData);
        done();

    })
})
}
)
//in above test case we are checking for proper database insertion and we are using thunk for middleware and const createMockStore=configureMockStore([thunk])
//we are uses propmises here please refer promises.js file for promises chaining because in every promise call we can call then with returned data
//refer promises.js in playground folder
//above we are passing parameter data for asynchronous function call 


test("should add default expense to database and store",()=>
{

    const store=createMockStore({});
    const expenseData={
    description:"",
    amount:0,
    note:"",
    createAt:0
}

    store.dispatch(startAddExpense({})).then(()=>
    {
        const actions=store.getActions()
        expect(actions[0]).toEqual(
            {
            type:"ADD_EXPENSE",
            expense:
            {
                id:expect.any(String),
                ...expenseData
            }
        });
     return database.ref(`expenses/${actions[0].expense.id}`).once("value")
     .then((snapshot)=>
    {
        expect(snapshot.val()).toEqual(expenseData);
        done();

    })
})
}
)

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
  });
/*test("should add default values to add expense action",()=>
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


})*/

test("should setup set expenses object with data",()=>
{
    const action=setExpenses(expenses);
    expect(action).toEqual(
        {
            type:"SET_EXPENSES",
            expenses
        }
    )

})



//you will set up test case for edit expense
//make an assertion
// we can use simple update object
//we have to use toEqual to comapre the objects 
//we have to use toBe to compare the boolean and string values
//the jest is used for testing and we have to use for testing in react
