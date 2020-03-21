import React from "react";
import moment from "moment"
import {shallow} from "enzyme";
import {ExpenseListFilters} from "../../components/ExpenseListFilter"
import {filters,altFilters} from "../fixtures/filters";
let wrapper,setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate;
beforeEach(()=>
{
    setTextFilter=jest.fn();
    sortByAmount=jest.fn();
    sortByDate=jest.fn();
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    wrapper=shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        
        
        />)
}
)
test("should render expense filetr correctley",()=>
{
    expect(wrapper).toMatchSnapshot();
})

test("should render expense filter correctley as per the another props",()=>
{
    wrapper.setProps(
        {
            filters:altFilters
        }
    )
    expect(wrapper).toMatchSnapshot();
})
test("should handle text change",()=>
{
    const value="rent"
    wrapper.find('input').simulate('change',
    {
        target:
        {
            value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})
//should handle text change
//should handle sort by date
test("should sort by date",()=>
{
    const value="date"
    wrapper.setProps(
        {
            filters:altFilters
        }
    )
    wrapper.find('select').simulate('change',
    {
        target:
        {
            value
        }
    })
    expect(sortByDate).toHaveBeenCalled();
})
//should handle sort by amount

test("should sort by amount",()=>
{
    const value="amount"
     wrapper.find('select').simulate('change',
    {
        target:
        {
            value
        }
    })
    expect(sortByAmount).toHaveBeenCalled();
})
//should handel date change

test("should handle date changes",()=>
{
    const startDate=moment(0).add(4,"years");
    const endDate=moment(0).add(8,"years");
     wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
     expect(setStartDate).toHaveBeenCalledWith(startDate);
     expect(setEndDate).toHaveBeenCalledWith(endDate)
    })
//should handle date change changes
test("should handle date focus changes",()=>
{
    const calendarFocused='endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);



})
//wrapper.setProps is used to set a props and we can pass new props values to the component
//