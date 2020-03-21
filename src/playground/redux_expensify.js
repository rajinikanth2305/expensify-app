import {createStore,combineReducers} from "redux"
import uuid from "uuid";
//add expense
//npm uuid
const addExpense=({description="",
note="",
amount=0,
createAt=0}={})=>(
    {
       type:"ADD_EXPENSE",
       expense:
       {
           id:uuid(),
           description,
           note,
           amount,
           createAt
       }
    }
)
//remove expense

const removeExpense=({id}={})=>(
{
    type:"REMOVE_EXPENSE",
    id

}
)
//edit expense


const editExpense=(id,updates)=>(
    {
        type:"EDIT_EXPENSE",
        id,
        updates
    }
)
//set text filetr

const setTextFilter=(text="")=>(
    {
        type:"SET_FILTER",
        text

}
)
//sort by date
const sortByDate=()=>(
    {
        type:"SORT_BY_DATE"
    }
)
//sort by amount
const sortByAmount=()=>(
    {
        type:"SORT_BY_AMOUNT"
    }
)
//set start state
const setStartDate=(startDate)=>(
    {
        type:"SET_START_DATE",
        startDate
    }
)
//set end state
const setEndDate=(endDate)=>(
    {
        type:"SET_END_DATE",
        endDate
    }
)
//expenses reducer
const expensesReducerDefaultSate=[];
const expensesReducer=(state=expensesReducerDefaultSate,action)=>
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
        
            default:
            return state;
    }
}
//filter reducer
const filterReducerDefaultState=
{
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined

}
const filtersReducer=(state=filterReducerDefaultState,action)=>
{
    switch(action.type)
    {
        case "SET_FILTER":
            return {...state, text:action.text};
        case "SORT_BY_AMOUNT":
            return {...state,sortBy:"amount"}
        case "SORT_BY_DATE":
            return {...state,sortBy:"date"}
        case "SET_START_DATE":
            return {...state,startDate:action.startDate}
        case "SET_END_DATE":
            return {...state,endDate:action.endDate}
         default:
            return state;
    }

}
//time stamps are counting in milliseconds
//postive numbers go forward and negative numbers goes backward
//
//88400-10-20
//2000 ,2001,
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>
{
    return expenses.filter((expense)=>
    {
        const statrDateMatch=typeof startDate!=="number" || expense.createAt>=startDate;
        const endDateMatch=typeof endDate!=="number" || expense.createAt<=endDate
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase())
        return statrDateMatch && endDateMatch &&textMatch;
    }).sort((a,b)=>{
        if(sortBy==="date")
        {
            return a.createAt<b.createAt?1:-1
        }
        else if(sortBy==="amount")
        {
            return a.amount<b.amount?1:-1
        }
    })
}

//figures out if expenses.description 
//includes method

//text=>"",sortbY="date",statrDate="undefined"
//store creation 
const store=createStore(combineReducers({expenses:expensesReducer,filters:filtersReducer}));

store.subscribe(()=>
{
    const state=store.getState()
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})


const expense=store.dispatch(addExpense({
    description:"rent",
    amount:100,
    createAt:1000

}))
const expense1=store.dispatch(addExpense({
    description:"coffee",
    amount:500,
    createAt:-1000

}))
//console.log(expense1.expense.id)
//store.dispatch(removeExpense({id:expense1.expense.id}))
//store.dispatch(editExpense(expense.expense.id,{amount:250}))
//store.dispatch(setTextFilter("rent"));
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(125))//start date of 125 //start date of null
//store.dispatch(setEndDate(1350))


const demoState={
    expenses:[
        {
            id:'rajini',
            description:"january event",
            note:"this was final payment for that address",
            amount:54500,
            createdAT:0
        }
    ],
    filters:
    {
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};
const user=
{
    name:"Rajini",
    age:24
}
const user1=user
user1.age=28
