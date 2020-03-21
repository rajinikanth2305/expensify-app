import filtersReducer from "../../reducers/filters"
import moment from "moment";
test("should set up default filetr values",()=>
{
    const state=filtersReducer(undefined,{type:"@@INIT"});
    expect(state).toEqual(
        {
            text:"",
            sortBy:"date",
            startDate:moment().startOf("month"),
            endDate:moment().endOf("month")
        }
    )
})


test("should set sort by amount",()=>
{
    const state=filtersReducer(undefined,{type:"SORT_BY_AMOUNT"});
    expect(state).toEqual(
        {
            text:"",
            sortBy:"amount",
            startDate:moment().startOf("month"),
            endDate:moment().endOf("month")
        }
    )
})
test("should set sort by date",()=>
{
    const currentState=
    {

        text:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:"amount"
    }
    const action=
    {
        type:"SORT_BY_DATE"
    };
    const state=filtersReducer(currentState,action);
    expect(state.sortBy).toEqual("date")
})

//should set text filter

test("should set sort by text",()=>
{
    const currentState=
    {

        text:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:"amount"
    }
    const action=
    {
        type:"SET_FILTER",
        text:"current bill"
    };
    const state=filtersReducer(currentState,action);
    expect(state.text).toEqual("current bill")
})



//should set startDate filter

test("should set sort by startDate",()=>
{
    const startDate=moment();
    const action=
    {
        type:"SET_START_DATE",
        startDate
    };
    const state=filtersReducer(undefined,action);
    expect(state.startDate).toEqual(startDate)
})

//should set endDate filter
test("should set sort by startDate",()=>
{
    const endDate=moment();
    const action=
    {
        type:"SET_END_DATE",
        endDate
    };
    const state=filtersReducer(undefined,action);
    expect(state.endDate).toEqual(endDate)
})
