function callName(num1){
  return num1*num1;

}
function callnumber(){
  console.log(callName(10));
}
setTimeout(callnumber, 1*1000);
console.log("I am first hehe");




const fs = require("fs");
    
fs.readFile("a.txt", "utf-8", function(err , data) {
  console.log(data);
})
            