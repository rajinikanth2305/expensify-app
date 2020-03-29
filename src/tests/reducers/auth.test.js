import authReducer from "../../reducers/auth"


test(" should set uid for login",()=>
{
    const action=
    {
        type:"LOGIN",
        uid:"ABC123"
    }
    const state=authReducer({},action);
    expect(state.uid).toBe(action.uid)
}
)



test("should clear uid when user logout",()=>
{
    const action=
    {
        type:"LOGOUT"
    }
    const state=authReducer({uid:"anything"},action);
    expect(state).toEqual({})

})