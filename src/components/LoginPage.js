import React from "react"
import {BrowserRouter,Route,Switch,Link,NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {startLogin} from "../actions/auth";
export const LoginPage=({startLogin})=>
{
    return(
        <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify App</h1>
        <p>its time to get your expenses under control</p>
        <button onClick={startLogin} className="button">Login using google</button>

        </div>
        
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>(
    {
        startLogin:()=>dispatch(startLogin())
    }
)
export default connect(undefined,mapDispatchToProps)(LoginPage);