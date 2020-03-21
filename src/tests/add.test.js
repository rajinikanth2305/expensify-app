const add=(a,b)=>a+b+5;
//challange time for writing test acse 
const generateGreeting=(name="Anonymous")=>`hello ${name}!`;

test('should add 2 numbers',()=>
{
    const result=add(4,5);
    expect(result).toBe(14);
   });

test("displaying name",()=>
{
    const result=generateGreeting("sanju");
    expect(result).toBe("hello sanju!")
})
test("displaying  anonymous name",()=>
{
    const result=generateGreeting();
    expect(result).toBe("hello Anonymous!")
})


   //test is global function it takes arrow fucntion as argument and we used one more function expect().toBe()
//first we have install jest and its a testing framework for react 
//we have to install using yarn add jest
//we can run the jest testing in background using yarn test -- --watch

   //we have to use yarn test -- --watch 