
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
    return (dispatch) => {
      const {
        description = '',
        note = '',
        amount = 0,
        createAt = 0
      } = expenseData;
      const expense = { description, note, amount, createAt };
  
     return database.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
    };
  };
  

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
