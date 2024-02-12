let count = 30;
function checktimer(){
    console.log(count);
    if (count===0)
    {
        clearInterval(timer);
    }
    count--;
}
const timer = setInterval(checktimer, 1000)