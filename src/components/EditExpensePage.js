import React from "react";
import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {editExpense} from "../actions/expenses"
import {removeExpense} from "../actions/expenses"

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
    this.props.editExpense(this.props.expense.id,expense);
    this.props.history.push("/");
  }
  onClick=()=>
  {
    const id=this.props.expense.id;
    this.props.removeExpense({id});
    this.props.history.push("/")
  }
  render()
  {
    console.log("running")
    return(
      <div>
      <h1>{this.props.expense.description}</h1>
      <ExpenseForm onSubmit={this.onSubmit}
      expense={this.props.expense}
      />
      <button onClick={this.onClick}>Remove</button>
   
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
    editExpense:(id,expense)=>dispatch(editExpense(id,expense)),
    removeExpense:(id)=>dispatch(removeExpense(id))
  }
)
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);

//we can pass the current component props to mapStateToprops passing props as argument
//props.history.push is for to go to homepage
//