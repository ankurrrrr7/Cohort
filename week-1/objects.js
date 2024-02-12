//Basic syntax of objetcs

const user ={
    name:"ankur",
    age:"19"
}
console.log(user["name"]);




const alluser =[{
    Firstname: "Shivam",
    Gender: "Male" 
},
{
    Firstname: "naman",
    Gender: "Male" 
},
{
    Firstname: "Aditya",
    Gender: "Female"
}]

for(let i =0; i<alluser.length; i++){
    if(alluser[i]["Gender"] == ["Male"])
    console.log("Male");

}