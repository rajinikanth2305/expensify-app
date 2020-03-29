// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
//import "./styles/style.scss";
//import "normalize.css/normalize.css";
import {Router,Route,Switch,Link,NavLink} from "react-router-dom"
import createHistory from "history/createBrowserHistory"

import AddExpensePage from "../components/AddExpense";
import Header from "../components/Header";
import NotPage from "../components/NotPage";
import HelpPage from "../components/HelpPage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashBoard";
import LoginPage from "../components/LoginPage"
import PrivateRoute from "./PrivateRoute"

//setup options prop for options component
//render the length of the array

export const history=createHistory();
//options class should render static text

const AppRouter=()=>(
    <Router history={history}>
    <div>
    <Switch>
    <Route path="/" component={LoginPage} exact={true}/>
    <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
    <PrivateRoute path="/create" component={AddExpensePage}/>
    <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
    <Route path="/help" component={HelpPage}/>
    <Route component={NotPage} />
    </Switch>
    </div>


    </Router>


);

//crete new six files for new componets 

//setup imports and exports defaults
//Option =>Option Component here
//Add option Componnet
//edit expense page
//help helppage
  

//Linkt to home page 
//Link to the create xpense page
//Link to the edit page
//Linking to the help page



export default AppRouter
    
 
  
//ReactDOM.render(reoutes,document.getElementById("app"));
