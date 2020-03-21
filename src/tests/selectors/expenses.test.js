
import moment from "moment"
import expenses from "../fixtures/expenses"

import selectExpenses from "../../selectors/expenses"

test("should filter by text filter",()=>
{
    const filters=
    {
        text:"e",
        sortBy:"date",
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual(
        [
            expenses[2],
            expenses[0]
        ]
    )

})

test("should filter by start date",()=>
{
    const filters=
    {
        text:"",
        sortBy:"date",
        startDate:moment(0),
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual(
        [
            expenses[2],
            expenses[0],
        ]
    )

})

//should filetr by end date
test("should filter by  end date",()=>
{
    const filters=
    {
        text:"",
        sortBy:"date",
        startDate:undefined,
        endDate:moment(0).add(2,"days")
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual(
        [
            expenses[0],
            expenses[1],

        ]
    )

})



//should sort by date
test("should filter by date",()=>
{
    const filters=
    {
        text:"",
        sortBy:"date",
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual(
        [
            expenses[2],
            expenses[0],
            expenses[1]
        ]
    )

})


//shouldsort by amount


test("should filter by amount",()=>
{
    const filters=
    {
        text:"",
        sortBy:"amount",
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual(
        [
            expenses[0],
            expenses[1],
            expenses[2]
        ]
    )

})



///i have to check once how the visible filters are visible and I have to focus on it