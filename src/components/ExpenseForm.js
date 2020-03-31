import React from "react"


import moment from "moment"
import { SingleDatePicker } from "react-dates";
//set up note state 
//const date=new Date();
//moment is standard for dates
const now = moment();
console.log(now.format("MMM Do,YYYY"))
//on change and value for text area
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createAt: props.expense ? moment(props.expense.createAt) : now,
            calanderFocused: false,
            error: ""


        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => (
            {
                description
            }
        )
        )
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => (
            {
                note
            })
        )
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(
                {
                    amount
                }
            )
        }
    };
    onDateChange = (createAt) => {
        if (createAt) {
            this.setState({
                createAt
            })

        }
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            //set error message please provide description and amount
            this.setState(
                {
                    error: "please add description and amount"
                }
            )

        }
        else {
            this.setState(() => (
                {
                    error: ""
                }
            )
            )
            this.props.onSubmit(
                {
                    description: this.state.description,
                    amount: parseFloat(this.state.amount, 10) * 100,
                    createAt: this.state.createAt.valueOf(),
                    note: this.state.note
                }
            )
        }
    }

    render() {
        return (
            <form className="form"onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}

                <input
                    className="text-input"
                    type="text"
                    placeholder="description"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    autoFocus />

                <input
                    type="text"
                    className="text-input"

                    placeholder="amount"
                    value={this.state.amount}

                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calanderFocused}
                    onFocusChange={({ focused }) => this.setState({ calanderFocused: focused })}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    className="textarea"
                    palceholder="add a note for the expense(optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}>

                </textarea>
                <div>
                <button className="button">Add expense</button>
                </div>
            </form>

        )

    }
}
//refer https://www.npmjs.com/package/react-dates for singledatepicker
//moment is used for to get an date instance and this is the best and better one
//refer react-dates
//we imported react-dates and moment library 
//moment() fucntion gives the current tiem t
//we are passing timestamp to moment() to get the date where the expense was created
//we can simulate the events and we can pass the function to that simulate and also we can set object for that event value
