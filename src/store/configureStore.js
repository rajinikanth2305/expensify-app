import {createStore,combineReducers,applyMiddleware} from "redux"
import expensesReducer from "../reducers/expenses"
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";
import { compose } from "redux";
//store creation 
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export default()=>
{
    const store=createStore(combineReducers(
        {expenses:expensesReducer,
        filters:filtersReducer}
        ),
        composeEnhancer(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

        );
   return store; 
}
//        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//the above line is used for developer tools to test components

