import React from "react"
import { connect } from "react-redux"
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

import configureStore from "../store/configureStore"
class AppRouter extends React.Component
{
    render()
    {
        console.log(this.props.filters)
        return (
            <div>
            <h1>Hello i am fyne</h1>
            <Header />
            </div>
        )
    }
    
}
const Header=(props)=>
{
    console.log(props.filters)

    return(
        <div>
        <h1>Hello iam header</h1></div>
    )
}

const store=configureStore();

const JSX=(
    <Provider store={store}>
    <AppRouter />
    </Provider>
)
const mapStateToProps = (state) => ({
    filters: state.filters
  });
ReactDOM.render(JSX,document.getElementById("app"));
export default connect(mapStateToProps)(AppRouter);

