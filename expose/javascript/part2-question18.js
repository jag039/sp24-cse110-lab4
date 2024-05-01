

function ptime(){
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log(time);        
}


setInterval(ptime, 1000);

