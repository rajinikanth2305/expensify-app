
export default (expenses)=>
{
    return expenses.map((expense)=>expense.amount)
    .reduce((sum,value)=>sum+value,0);

};

//we gonna use reduce function
//the reduce function takes an accumulator for sum up and we given default 0
//the reduce function will iterate the all items of an object and sum up 