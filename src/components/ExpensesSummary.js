import React from "react"
import {Link} from "react-router-dom"
import selectTotalExpenses from "../selectors/expense-total"
import selectExpenses from "../selectors/expenses"
import { connect } from "react-redux"
import numeral from "numeral"

export const ViewTotalExpenses=({total,length})=>
{
    const expenseWord= length===1? "expense": "expenses";
    const formattedExpenseTotal=numeral(total/100).format(('$0,0.00'));
    return(
        <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{length} </span> {expenseWord} totalling is <span>{formattedExpenseTotal}</span></h1>
        <div className="page-header__actions">

        <Link className="button" to="/create">Add Expense</Link>
        
        </div>
        
        </div>
        
        </div>
    )
}

const mapStateToProps=(state) => {
    const visibleExpenses=selectExpenses(state.expenses,state.filters)
    return {
        total:selectTotalExpenses(visibleExpenses),
        length:visibleExpenses.length
    };
  }
export default connect(mapStateToProps)(ViewTotalExpenses)
//export default ViewTotalExpenses;

// adding comments to this page
//testing for git hub
