function asyncawait(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("ankur")
        }, 3000)
    })    
    return p;
}

async function main(){
    let ans = await asyncawait();
    console.log(ans);
}

main();