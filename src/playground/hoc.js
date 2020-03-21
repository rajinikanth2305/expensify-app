//higher order components (HOC)==a componenet that renders another component
//to reuse the code 
//render hijacking
//prop manipulation
//abstract state 
//regular and higher order component 
import React from "react";
import ReactDOM from "react-dom";
const Info=(props)=>(
    <div>
    <h1>info</h1>
    <p>THe info is :{props.info}</p>

    </div>
);
const withAdminWarning=(WrappedComponent)=>
{
    return (props)=>(
        <div>
        {props.isAdmin && <p>This is private info please dont name</p>
        }
        <WrappedComponent {...props} />
        </div>
    )
}
const requireAuthentication=(WrappedComponent)=>
{
    return (props)=>(
        <div>
        {props.isAuthenticated ? (<WrappedComponent {...props}/>):(<p>Please login info</p>)}
        
    
        </div>
    )
}



//require authentication
const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info)
ReactDOM.render(<AuthInfo  isAuthenticated={false} info="this is my first"/>,document.getElementById("app"));
