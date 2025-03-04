
const button1 = document.getElementById("button1");
let texxt = document.getElementById("alarmtext");
let stache = document.getElementById("must")
let test = document.getElementById("test")
let reset = document.getElementById("reset")
let clicks = 0;
let clicks2=0
let clicks3=0
function yellatuser(){
    clicks++;
    if(clicks==0){
      texxt.innerHTML=""
    }
    if (clicks==1) {
      texxt.innerHTML="STOP TOUCHING ME"
    }
    if (clicks==2){
      texxt.innerHTML = texxt.innerHTML +'!'
    }
    if (clicks==3){
      texxt.innerHTML = texxt.innerHTML +'!'
    }
    if (clicks==4){
      texxt.innerHTML = texxt.innerHTML +'!'
    }
    if (clicks==5){
      texxt.innerHTML = "...."
    }
    if(clicks==7){
      button1.classList.add("sub1");
      texxt.innerHTML = "I'm there now"
    }
    if(clicks==8){
      button1.classList.remove("sub1");
      texxt.innerHTML = "I'm back"
    }
    if(clicks==9){
      button1.classList.add("sub1");
      texxt.innerHTML = "I'm there now"
    }
    if(clicks==10){
      button1.classList.remove("sub1");
      texxt.innerHTML = "I'm back"
    }
    if(clicks==11){
      button1.classList.add("sub1");
      texxt.innerHTML = "I'm there now"
    }
    if(clicks==12){
      button1.classList.remove("sub1");
      texxt.innerHTML = "I'm back"
    }
    if(clicks==13){
      button1.classList.add("sub1");
      texxt.innerHTML = "I'm there now"
    }
    if(clicks==15)
    {
      button1.classList.remove("sub1");
      button1.classList.add("orbit");
      texxt.innerHTML = "Try pressing me now!"
    }
    if(clicks==16)
    {
      button1.classList.remove("orbit");
      button1.classList.add("orbit2");
      texxt.innerHTML = "Try pressing me now!"
    }
    if(clicks==17)
    {
      button1.classList.remove("orbit2");
      button1.classList.add("orbit3");
      texxt.innerHTML = "Try pressing me now!"
    }
    if(clicks==17)
    {
      button1.classList.remove("orbit3");
      stache.classList.add("stache");
      texxt.innerHTML = "where is the button?"
    }
    if (clicks == 20) {
      texxt.innerHTML = "not here"
    }
    if (clicks==25) {
    }
    if(clicks==100){
      stache.classList.remove("stache")
      button1.classList.add("mover")
      texxt.innerHTML = "I HAVE REACHED MY ULTIMATE STATE YOU CANT CATCH ME"
    }
}
function  testact(){
;clicks3++;
if(clicks3==1){
  let clicks=20
}
let clicks3 = 0
}
function resetact(){
clicks2++;
if(clicks2==1){
  let clicks=0
}
let clicks2 = 0
}
button1.addEventListener("click", yellatuser);
test.addEventListener("click", testact);
reset.addEventListener("click", resetact);