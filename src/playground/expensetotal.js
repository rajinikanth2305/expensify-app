import moment from "moment"

const expenses= [
    {
        id:"1",
        description:"paneer bill",
        note:"paid by venkatesh",
        amount:800,
        createAt:0
    },
    {
        id:"2",
        description:"bill",
        note:"paid by venkatesh and avinash",
        amount:400,
        createAt:moment(0).subtract(4,'days').valueOf()
    },
    {
        id:"3",
        description:"credit card  bill",
        note:"paid by pavan and kirit",
        amount:300,
        createAt:moment(0).add(4,'days').valueOf()
    
    }

]
var total=0;
const getExepnsesTotal=(expenses)=>
{
    expenses.map((expense)=>
    {
        total+=expense.amount

    })
    return total

}
console.log(getExepnsesTotal(expenses));