/* UGLY WAY
const { promises } = require("dns");
const fs = require("fs");
function reads(cb){
    fs.readFile("a.txt", "utf-8", function(err , data) {
        cb(data);
})}

function callback(data){
        console.log(data)   
}

reads(callback);

*/

//PRETTYY WAY
 fs = require("fs");
function reads(){
    return new Promise(function(resolve){ 
        fs.readFile("a.txt", "utf-8", function(err , data) {
        resolve(data);})
    })
}

function callback(data){
        console.log(data)   
}

reads().then(callback);
