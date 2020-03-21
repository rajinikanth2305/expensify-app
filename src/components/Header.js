import React from "react";
import {NavLink} from "react-router-dom";

const Header=()=>
(
    <header>
    <h1>Tilte of tha expensify app</h1>
    <NavLink to ="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to ="/create" activeClassName="is-active">create expense page</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit page</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>

    </header>
)
export default Header;