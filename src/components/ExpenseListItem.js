import React from "react";
import {NavLink} from "react-router-dom";
import moment from "moment"
import numeral from "numeral"
//export stateless functional component 
//render few pieces of information 
//description 
//amount
//creat//
const ExpenseListItem=({id,description,amount,createAt})=>(
    <div>
    <NavLink to ={`/edit/${id}`} exact={true}>
    <h1>{description}</h1>
    </NavLink>
    <p>
    {numeral(amount/100).format('$0,0.00')}
    -
    {moment(createAt).format("MMMM Do,YYYY")}</p>
    <p>{id}</p>
    </div>
 
)
export default ExpenseListItem;


//notes for this lesson

//we should have to pass expense id to edit expens epage to get edit 
//we can pass using {`/edit/${id}`} to pass id to that expense page
