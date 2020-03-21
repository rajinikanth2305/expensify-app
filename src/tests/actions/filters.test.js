import {setStartdate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate, 
    setStartDate} from "../../actions/filters"
import moment from "moment"

test("should generate test for set start date action ",()=>
{
    const action=setStartDate(moment(0))
    expect(action).toEqual(
        {
            type:"SET_START_DATE",
            startDate:moment(0)
        }
    )
})


test("should generate test for set end date action ",()=>
{
    const action=setEndDate(moment(0))
    expect(action).toEqual(
        {
            type:"SET_END_DATE",
            endDate:moment(0)
        }
    )
})


test("should generate test case for text filetr",()=>
{
    const action=setTextFilter("rajini")
    expect(action).toEqual(
        {
            type:"SET_FILTER",
            text:"rajini"
        }
    )

})


test("should generate test case for sort amount filetr",()=>
{
    const action=sortByAmount()
    expect(action).toEqual(
        {
            type:"SORT_BY_AMOUNT"
        }
    )
})

test("should generate test case for text default  filetr",()=>
{
    const action=setTextFilter()
    expect(action).toEqual(
        {
            type:"SET_FILTER",
            text:""
        }
    )  
})

test("should generate test case for sort date filetr",()=>
{
  const action=sortByDate()
  expect(action).toEqual(
      {
          type:"SORT_BY_DATE"
      }
  )
})




//we can use moment instance in test cases to check for start date and end date