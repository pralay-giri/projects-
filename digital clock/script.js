
let printTime = ()=>{
    let realTime = new Date();
    let hour = realTime.getHours().toString().padStart(2, "0");
    let min = realTime.getMinutes().toString().padStart(2, "0");
    let second = realTime.getSeconds().toString().padStart(2, "0");
    let currTime = hour + ":" + min + ":" + second;
    document.getElementById("time").innerHTML = currTime;
}

setInterval(printTime, 1000);