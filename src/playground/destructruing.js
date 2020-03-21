console.log("iam fyne");
console.log("rajinikant")
const person=
{
    name:"Andrew",
    age:26,
    location:
    {
        city:"hyderabad",
        temp:24
    }
}
const {name,age}=person
const {city,temp:temperature}=person.location

console.log(`${name} is ${age} and location is ${city} and temi is ${temperature}`);



//array destructuring

const address=[]
const [place="New york"]=address

console.log(`you are  in ${place}`)