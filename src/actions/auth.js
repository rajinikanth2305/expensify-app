import {firebase,googleAuthProvider} from "../firebase/firebase"

export const login=(uid)=>(
{
    type:"LOGIN",
    uid
}
)
export const startLogin=()=>
{
    return ()=>
    {
        return firebase.auth().signInWithPopup(googleAuthProvider).then((result)=>
        {
            var token=result.credential.accessToken;
            var user=result.user;
            console.log(user)
        })
    }
}

export const startLogout=()=>
{
    return ()=>
    {
        return firebase.auth().signOut();
    }
}
export const logout=()=>(
    {
        type:"LOGOUT"
    }
)