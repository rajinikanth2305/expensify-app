// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
//import "./styles/style.scss";
//import "normalize.css/normalize.css";
import {BrowserRouter,Route,Switch,Link,NavLink} from "react-router-dom"
import AddExpensePage from "../components/AddExpense";
import Header from "../components/Header";
import NotPage from "../components/NotPage";
import HelpPage from "../components/HelpPage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashBoard";

//setup options prop for options component
//render the length of the array


//options class should render static text

const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header />
    <Switch>

    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage}/>
    <Route path="/edit/:id" component={EditExpensePage}/>
    <Route path="/help" component={HelpPage}/>
    <Route component={NotPage} />
    </Switch>
    </div>
    </BrowserRouter>


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
