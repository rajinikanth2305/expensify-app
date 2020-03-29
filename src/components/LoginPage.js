import React from "react"
import {BrowserRouter,Route,Switch,Link,NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {startLogin} from "../actions/auth";
export const LoginPage=({startLogin})=>
{
    return(
        <div>
        <center>
        <button onClick={startLogin}>
        Login
        </button>
        </center>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>(
    {
        startLogin:()=>dispatch(startLogin())
    }
)
export default connect(undefined,mapDispatchToProps)(LoginPage);