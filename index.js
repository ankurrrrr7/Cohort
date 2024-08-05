//ARRAY
let x = [10,3,30,9];
for(let i=0; i<x.length; i++){
  if(x[i]%2==0){
    console.log(x[i]);
  } 
}
// OBJECT 
const alluser =[{
  firstname : "Ankur",
  gender : "male" 
},
  { firstname : "harkirat",
    gender : "male"}, 
  { 
    firstname : "Priya",
    gender : "Female"
  }]

  for(let i =0 ; i< alluser.length; i++){
    if(alluser[i]["gender"] == "male"){
      console.log(alluser[i]["firstname"]);
    }
  }


  // REVERSE A STRING
  let reverse = [1,2,3,4,5];

  for(let i =reverse.length; i>=0; i-- ){
    console.log(reverse[i]);

  }

  function sum(a,b){
    const sumvalue = a+b;
    return sumvalue;

  }
//CALLBACK FUNCTION
  const value = sum(1,2);
  console.log(value);

  function sum(num1,num2){
    const result = num1+num2;
    return result;
  }
  function displayresult(data){
    console.log("Result of the sum is",data);
  }
  const answere = sum(1,2)
  displayresult(answere);