import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import {startLogout} from "../actions/auth"
export const Header=({startLogout})=>
(
    <header className="header">
    <div className="content-container">
    <div className="header__content">
    <Link className="header__title" to ="/dashboard"  exact={true}><h1>Expensify</h1></Link>
    <button className="button button--link" onClick={startLogout}>Logout</button>
    </div>
    </div>
    </header>
    
)
const mapDispatchToProps=(dispatch)=>(
    {
        startLogout:()=>dispatch(startLogout())
    }
)
export default connect(undefined,mapDispatchToProps)(Header);


//adding comments to header page
//adding comments to this page for testing
//adding comments to this page for testing purpose
//I wanted to test it again second time
//i am adding one more line

