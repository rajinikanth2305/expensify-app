export const isAdult=(age)=>
{
    if(age>18)
    {
        console.log(true)
    }
    else
    {
        console.log(false)
    }

}
export const canDrink=(age)=>
{
    if(age>=21)
    {
        console.log("can drink")
    }
    else
    {
        console.log("not drink")
    }
}
export default (age)=> age>50