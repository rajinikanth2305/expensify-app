// install -> import -> use
import React from 'react';
//import createHistory from 'history/createBrowserHistory'
//import { createBrowserHistory } from 'history'

import moment from "moment"
import ReactDOM from 'react-dom';
import configureStore from "./store/configureStore"
import "./styles/style.scss";
import "normalize.css/normalize.css";
import {BrowserRouter,Route,Switch,Link,NavLink} from "react-router-dom"
import AppRouter ,{ history } from "./routers/AppRoute"
import {startSetExpenses} from "./actions/expenses.js";
import {login,logout} from "./actions/auth"
import getVisibleExpenses from "./selectors/expenses"
import {Provider} from "react-redux"
import "react-dates/lib/css/_datepicker.css";
require("history").createBrowserHistory;
import {firebase} from "./firebase/firebase";
//import "./playground/promises"
//setup options prop for options component
//render the length of the array


//options class should render static text

//add-expense -water bill
//add-expense -gas bill
//text-filter=>bill
//getVisibleExpenses
//Option =>Option Component here
//Add option Componnet

 
 const store=configureStore();
let hasRendered=false;
const renderApp=()=>
{
    if(!hasRendered)
    {
        ReactDOM.render(JSX,document.getElementById("app"));
        hasRendered=true;
    }
}
const JSX=(
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading ....</p>,document.getElementById("app"));


firebase.auth().onAuthStateChanged((user)=>
{
    if(user)
    {
        store.dispatch(login(user.uid))
        console.log('uid',user.uid)
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname==="/")
            {
                history.push("/dashboard")
            }
        })
    }
    else{
        store.dispatch(logout());
        renderApp();
        history.push("/")
    }
})
