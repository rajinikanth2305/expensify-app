import * as firebase from "firebase"
import * as expensesActions from "../actions/expenses"
//it takes all the named exports from fireabse and it will dump to varibale firebase
var Config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    
    
  };
firebase.initializeApp(Config);
const database=firebase.database();



export {firebase,database as default};
/*database.ref("expenses").once("value").then((snapshot)=>
{
    const expenses=[];
    snapshot.forEach((childsnapshot)=>
    {
        expenses.push(
            {
               id:childsnapshot.key,
               ...childsnapshot.val()
            }
        )
    })
    console.log(expenses)

})*/
/*database.ref("expenses").on("child_removed",(snapshot)=>
{
    console.log(snapshot.key,snapshot.val())
})

//child_changed files when one of the child chanes
database.ref("expenses").on("child_changed",(snapshot)=>
{
    console.log(snapshot.key,snapshot.val())
})

//child_added
database.ref("expenses").on("child_added",(snapshot)=>
{
    console.log(snapshot.key,snapshot.val())
})


//on doesnot support promises

//create some expenses
//setup expenses with three items
//description,note,amount,createAT

database.ref("expenses").push(
    {
        description:"vegetables bill",
        amount:1200,
        note:"piad by avinash",
        createAt:"5000"
    }
)

/*database.ref("expenses").push(
    {
        description:"internet bill",
        amount:400,
        note:"piad by srikanth",
        createAt:"2000"
    }
)
database.ref("expenses").push(
    {
        description:" chicken bill",
        amount:300,
        note:"piad by kirit",
        createAt:"2000"
    }
)*/
/*const firebaseNotes=
{
    notes:
    {
        appijsdf:
        {
            "title":"first note",
            "body":"This is my first note" 
        },
        appijsdfg:
        {
            "title":"second note",
            "body":"this is my second note"
     
        }

    }
}
const note=[
    {
        id:1,
        "title":"first note",
        "body":"This is my first note"
    },
    {
        id:2,
        "title":"second note",
        "body":"this is my second note"
    }
]
*/

/*database.ref("notes").push(
    {
        title:"course topics",
        body:"python and react"
    }
)*/

//firebase does not support arrays and it convert into objects
//fetching

/*database.ref("location/city").
once('value').then((snapshot)=>
{
    const val=snapshot.val();
    console.log(val);
}).catch((e)=>
{
    console.log("error fetching data",e)
})*/

//firebase doesnot support arrays
//having a lsit of
//using once we will get data and function runs once and we get not notified if the data changes by the server when we used once method to fetch data
//the above one we can fetch all the data once at a time and we are displaying the data 

 /*database.ref().on("value",(snap)=>
{
    const data=snap.val();
    console.log(data.name+" "+ data.job.title+" "+data.location.city)
})

setTimeout(()=>
{
    database.ref().update({
        name:"kirit reddy",
        age:18,
        "location/city":"kolkotta"
    }
    )
},3000)
//setup data subscription
//print the following message name,title and company
//change the data and make sure it remians
//in above example we havent used promises because it will call only time either resolved or rejected but we need to call back function when everytime data changes and thats the reason we are calling on

//working on remove

/*database.ref().remove().then(()=>
{
    console.log("remove is succeded")
}).catch((e)=>
{
    console.log("not succeded",e)
}) */

  /*database.ref().set(
      {
          name:"rajinikanth reddy",
          age:26,
          job:{
              title:"system_engineer",
              company:"tata services"

          },
          stress_level:6,
          location:{
              city:"hyderabad",
              country:"India"
          }
      }
  ).then(()=>
  {
      console.log("data is saved now")
  }).catch((e)=>
  {
      console.log("this failed",e)
  });

  //database.ref().set("this is my data")


  database.ref('age').set(30)
  database.ref('location/city').set("nagpur")

  //set up then and catch
  //make sure catch actually works
  //switch false to be open
  //make sure then runs
  database.ref("attributes").set(
      {
        height:125,
        weight:70

      }
  ).then(()=>
  {
      console.log("saved data proeprly")
  }).catch((e)=>
  {
      console.log("error returned again",e)
  })

  /*database.ref().update(
      {
          job:"manager",
          "location/city":"nagpur"
      }
  )*/

  //strees level to 9
  //change job company to amazon
  //chanhe location to bangalore

  /*database.ref().update(
      {
          stress_level:9,
          "job/company":"amazon",
          "location/city":"bangalore"

      }
  )*/

  //whenever we have to update the objcet which is sitting in ref object than the total properties of object will be overwritten and old properties will be removed
  

  //by updating we can add new vales,update old values and remove the properties by setting null
  //updating the data 
//passing null to reference is equal to remove
//we can use any one as per the requirement
//

  //challange time
  //attributes about person height,weight
//in above we can see that we are passing a parameter age in ref to update age value
  //set can take any of the data and it will override the original data and we can also pass object to set

//in firebase we all have features like autentication,calling function ,writing to databases

//ref stands to refernece of database and it seems like a part of the database to consider like tables,users etc...