import React from "react";
import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {editExpense} from "../actions/expenses"
import {removeExpense,startEditExpense,startRemoveExpense} from "../actions/expenses"

//refractor edit expense page to be class compoenent based
//setup mapdispatch to props,editexpense and removeexpense
//should render editexpensepage
//snapshot
//shouuld handle editexpense
//spy

//should handle removeexpense
//spy
export class EditExpensePage extends React.Component{
  onSubmit=(expense)=>
  {
    this.props.startEditExpense(this.props.expense.id,expense);
    this.props.history.push("/");
  }
  onClick=()=>
  {
    const id=this.props.expense.id;
    this.props.startRemoveExpense({id});
    this.props.history.push("/")
  }
  render()
  {
    return(
      <div>
      <div className="page-header">
      <div className="content-container">
      <h1 className="page-header__title">Edit Expense</h1>
      
      </div>
      </div>
      <div className="content-container">
      <ExpenseForm onSubmit={this.onSubmit}
      expense={this.props.expense}
      />
      <button className="button button--secondary" onClick={this.onClick}>Remove</button>

      </div>
   
      </div>

    )
  }

}
const mapStateToProps = (state, props) => {
    return {
      expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
  };
const mapDispatchToProps=(dispatch,props)=>
(
  {
    startEditExpense:(id,expense)=>dispatch(startEditExpense(id,expense)),
    startRemoveExpense:(id)=>dispatch(startRemoveExpense(id))
  }
)
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);

//we can pass the current component props to mapStateToprops passing props as argument
//props.history.push is for to go to homepage
//