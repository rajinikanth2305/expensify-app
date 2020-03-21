//set text filetr

export const setTextFilter=(text="")=>(
    {
        type:"SET_FILTER",
        text

}
)
//sort by date
export const sortByDate=()=>(
    {
        type:"SORT_BY_DATE"
    }
)
//sort by amount
export const sortByAmount=()=>(
    {
        type:"SORT_BY_AMOUNT"
    }
)
//set start state
export const setStartDate=(startDate)=>(
    {
        type:"SET_START_DATE",
        startDate
    }
)
//set end state
export const setEndDate=(endDate)=>(
    {
        type:"SET_END_DATE",
        endDate
    }
)