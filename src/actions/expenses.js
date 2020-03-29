
import uuid from "uuid"
import database from '../firebase/firebase';


//component calls action generator
//action generator returns object
//component dispatches object
//redux store changes

//component calls action generator
//action generator returns function
//component dispatches function
//function runs he ability to dispatch other actions and do whatever it wants




export const addExpense=(expense)=>(
    {
       type:"ADD_EXPENSE",
       expense
    }
)


export const startAddExpense = (expenseData = {}) => {
    return (dispatch,getState) => {
      const uid=getState().auth.uid;
      const {
        description = '',
        note = '',
        amount = 0,
        createAt = 0
      } = expenseData;
      const expense = { description, note, amount, createAt };
  
     return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
    };
  };
  
//setup remove expense that we can dispatch to firebase
export const startRemoveExpense=({id}={})=>
{
  console.log(id);
  return (dispatch,getState)=>
  {
    const uid=getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>
    {
      dispatch(removeExpense({id}))
    }).catch((e)=>
    {

    })
  }
}

//we have to return keyword fro database.ref because for test case
//set up edit expense that we can dispatch to firebase


//expenses/${actions[0].expense.id}
//remove expense


export const removeExpense=({id}={})=>(
{
    type:"REMOVE_EXPENSE",
    id

}
)
//edit expense


export const editExpense=(id,updates)=>(
    {
        type:"EDIT_EXPENSE",
        id,
        updates
    }
)
export const startEditExpense=(id,updates)=>
{
  return (dispatch,getState)=>
  {
    const uid=getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>
    {
      dispatch(editExpense(id,updates))
    })
  }
}

//SET_EXPENSES
export const setExpenses=(expenses)=>(
  {
    type:"SET_EXPENSES",
    expenses
  }
)

//fetch all expenses data once 
//pass that data tothe array
//dispatch setExpenses
//export const startSetExpenses

export const startSetExpenses=()=>
{
  return (dispatch,getState)=>
  {
    const uid=getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once("value").then((snapshot)=>
    {
      const expenses=[];
      snapshot.forEach((childsnapshot)=>
      {
        expenses.push({
          id:childsnapshot.key,
          ...childsnapshot.val()
        })
      })
      dispatch(setExpenses(expenses))
    })
  }
}