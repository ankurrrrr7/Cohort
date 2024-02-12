/*function sum(a, b){
    //do things with the input and return the output
    const Sumvalue=a+b;
    return Sumvalue;
}
const value= sum(1,2);
console.log(value);*/


// callback function

function sum(num1, num2, calltofunction){
    let result = num1+num2;
    calltofunction(result);
    return result;

}

function displayresult(data){
    console.log("Result of the sum is "+ data);
}
function displayresultpassive(data){
    console.log(" sum's results is"+ data);
}

const ans = sum(1,2, displayresult);
