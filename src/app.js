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
import AppRouter from "./routers/AppRoute"
import {startSetExpenses} from "./actions/expenses.js";
import {setTextFilter} from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"
import {Provider} from "react-redux"
import "react-dates/lib/css/_datepicker.css";
require("history").createBrowserHistory;
import "./firebase/firebase";
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

const JSX=(
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading ....</p>,document.getElementById("app"));
store.dispatch(startSetExpenses()).then(()=>
{
    ReactDOM.render(JSX,document.getElementById("app"));

})

