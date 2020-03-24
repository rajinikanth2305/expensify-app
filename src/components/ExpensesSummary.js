import React from "react"
import selectTotalExpenses from "../selectors/expense-total"
import selectExpenses from "../selectors/expenses"
import { connect } from "react-redux"
import numeral from "numeral"

export const ViewTotalExpenses=({total,length})=>
{
    const expenseWord= length===1? "expense": "expenses";
    const formattedExpenseTotal=numeral(total/100).format(('$0,0.00'));
    return(
        <div>
        <h1>Viewing {length} {expenseWord} totalling is {formattedExpenseTotal}</h1>
        
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