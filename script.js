const button1 = document.getElementById("button1");
let texxt = document.getElementById("alarmtext");
let clicks = 0;


function yellatuser(){ 
    clicks++;
    if (clicks==1) {
      texxt.innerHTML="STOP TOUCHING ME"
    }
 
}
button1.addEventListener("click", yellatuser);


