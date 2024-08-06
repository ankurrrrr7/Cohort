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
function sum1(num1, num2, funToCall){
  const result = num1+num2;
  funToCall(result);
}
function displayresult(data){
  console.log("Result of the sum is",data);
}
function displayresultpassive(data){
  console.log("Sum result is", data);  
}
const answere = sum1(1,2,displayresultpassive);

//Example 2
function arthemtic(a,b,arthemticFinal){
  const sol =arthemticFinal(a,b);
  return sol;

}
function sum(a,b){
      return a+b;
}
function sub(a,b){
      return a-b;
}

const solution = arthemtic(1,2,sum);
console.log(solution);


// timeout 
function greet(){
  console.log("Hello world");
}

 setTimeout(greet, 1*1000);

 // loops 
  let ans  = 0

  for(let num1 =1; num1<=50; num1++){
    ans = ans + num1;
    console.log(ans);
  }

// function example
function sum(n){
  let ans = 0;
  for(let i =0;  i<=n; i++){
    ans+=i;
  }
  return ans;

}
ans = sum(5)
console.log(ans);

// callback example
function square (n){
  return n*n;

}
function cube (n){
  return n*n*n;
}
function sumOfSquare(a,b,callback){
    const val1 = callback(a);
    const val2 = callback(b);
    return val1+val2;
}
console.log("Answere:" + sumOfSquare(1,2,square));