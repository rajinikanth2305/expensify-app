const promise=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(
            {
                name:"rajinikanth data",
                age:28
            }
        );
    },5000)

})
console.log("before")
promise.then((data)=>
{
    console.log("1",data)
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("this is my other promise");
        },5000)
    
    })
}).then((str)=>
{
    console.log("does this run",str);

}).catch((error)=>
{
    console.log('error',error)
});


console.log("after");

//only one is called either resolved or reject
//from above example we can see that in promise call only once resolve will be called and it wont call again
//in above example when promise get rejected we have to call another function to show the error and thats why we are calling with catch