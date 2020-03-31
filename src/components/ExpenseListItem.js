import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment"
import numeral from "numeral"
//export stateless functional component 
//render few pieces of information 
//description 
//amount
//creat//
const ExpenseListItem = ({ id, description, amount, createAt }) => (
    <NavLink className="list-item" to={`/edit/${id}`} exact={true}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">{moment(createAt).format("MMMM Do,YYYY")}</span>
        </div>
        <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}
        </h3>

    </NavLink>


)
export default ExpenseListItem;


//notes for this lesson

//we should have to pass expense id to edit expens epage to get edit 
//we can pass using {`/edit/${id}`} to pass id to that expense page
