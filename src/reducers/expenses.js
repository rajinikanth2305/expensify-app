//expenses reducer
import database from "../firebase/firebase"
const expensesReducerDefaultSate=[];

database.ref("expenses").once("value").then((snapshot)=>
{

    snapshot.forEach((childsnapshot)=>
    {
        expensesReducerDefaultSate.push(
            {
               id:childsnapshot.key,
               ...childsnapshot.val()
            }
        )
    })

})


export default (state=expensesReducerDefaultSate,action)=>
{
    switch(action.type)
    {
        case "ADD_EXPENSE":
            return [...state,action.expense]
        
        case "REMOVE_EXPENSE":
            return state.filter(({id})=>id!=action.id);
        case "EDIT_EXPENSE":
            return state.map((expense)=>
            {
                if(expense.id===action.id)
                {
                    return {...expense,...action.updates}
                }
                else{
                    return expense
                }

            })
        case "SET_EXPENSES":
            return action.expenses

        
            default:
            return state;
    }
}