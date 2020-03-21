import {createStore} from "redux"
console.log("running")



const add=({a,b},c)=>
{
    return a+b+c
};
console.log(add({
    a:12,
    b:24
},100));
//reducers
//reducers are pure functions
//output determined by input
//pure function means it depend on only input
//never change state or action
let a=10;
const add=(b)=>
{
    return a+b
}



const countReducer=(state={count:10,name:"rajinikanth"},action)=>
{
    switch(action.type)
    {
        case "INCREMENT":
            return(
                {
                    count:state.count+action.incrementBy,
                    name:"sanju reddy"
                }
            )
        case "DECREMENT":

            return(
                {
                    count:state.count-action.decrementBy
                }
            )
        case "RESET":
            return({count:0});
        default:
            return state


    }
}
const store=createStore(countReducer)
store.subscribe(()=>
{
    console.log(store.getState());
})   
//actions in the redux store
const addIncrement=({incrementBy=1}={})=>(
{
        type:"INCREMENT",
        incrementBy

}
)
const addDecrement=({decrementBy=1}={})=>
{
    return{
        type:"DECREMENT",
        decrementBy
    }
}
const resetCount=()=>(
    {
        type:"RESET"

    }


)

store.dispatch(addIncrement({incrementBy:5}))
store.dispatch(addDecrement({decrementBy:10}))
store.dispatch(resetCount())






