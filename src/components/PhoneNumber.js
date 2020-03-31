import React from "react"
import {firebase} from "../firebase/firebase"
import * as firebaseui from 'firebaseui'


  
export class PhoneNumber extends React.Component
{
    state={
        description:" ",
        verifier:""


    }
    componentDidMount()
    {
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ]
    // Other config options...
  });
  
        this.renderer();
    }
    renderer()
    {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        recaptchaVerifier.render();
 
    }

    onDescriptionChange=(e)=>
    {
        const description=e.target.value;
        console.log(description)
        this.setState(()=>(
            {
                description
            }
        )

        )

    }
    phoneAuth=()=>
    {
        const phoneNumber=this.state.description;
        firebase.auth().signInWithPhoneNumber(phoneNumber,window.recaptchaVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
      // Error; SMS not sent
      console.log(error)
      // ...
    });

    }
    verify=()=>
    {
        var code=document.getElementById("verificationcode").value;
        window.confirmationResult.confirm(code).then((result)=>
        {
            alert("successfullyregistered");
            var user=result.user;
            console.log(user)

        })

    }

    render()
    {

        return(
            <div>
            <input 
            type="text" 
            placeholder="description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus />
            <div id="recaptcha-container"></div>
            <div id="firebaseui-auth-container"></div>

            <button onClick={this.phoneAuth}>Submit</button>
            <h1>Enter verification code</h1>
            <input type="text" id="verificationcode" placeholder="Enter verification code" />
            <button onClick={this.verify}>Verify code</button>
            
            </div>
            )
        
    }
}