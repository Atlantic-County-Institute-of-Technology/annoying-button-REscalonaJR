const button1 = document.getElementById("button1");
let texxt = document.getElementById("alarmtext");
let stache = document.getElementById("must")
let container = document.getElementById("container")
let clicks = 0;
let clicksound = new Audio ('assets/click.mp3');
let mercury = document.getElementById("mercury");
let venus = document.getElementById("venus");
let earth = document.getElementById("earth");
let jupiter = document.getElementById("jupiter");
let saturn = document.getElementById("staurn");
let uranus = document.getElementById("uranus");
let neptune = document.getElementById("neptune");
let sun = document.getElementById("sun");
let crewmate = document.getElementById("crewmate");
let star_a = document.getElementById("star_a");
let sta_a = document.getElementById("sta_a");
let stare_a = document.getElementById("stare_a");
let star_b = document.getElementById("star_b");
let sta_b = document.getElementById("sta_b");
let stare_b = document.getElementById("stare_b");
let star_c = document.getElementById("star_c");
let sta_c = document.getElementById("sta_c");
let stare_c = document.getElementById("stare_c");
let solar_container = document.getElementById("solar_container")
let body = document.getElementById("body")
let button_trail1 = document.getElementById("button_trail1")
let button_trail2 = document.getElementById("button_trail2")
const button2 = document.createElement("button");
 const button3 = document.createElement("button");
 container.appendChild(button3);
container.appendChild(button2)
button2.classList.add("invis")
button3.classList.add("invis")


function yellatuser(){
    clicks++;clicksound.play();
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
      texxt.innerHTML = "STOP TOUCHING MEE!!!"
      stache.classList.remove("stache")
      button1.classList.add("running")
    }
    if (clicks==30) {
      texxt.innerHTML = "I CANT ANYMORE"
      button1.classList.remove("running")
      button2.classList.remove("invis")
button3.classList.remove("invis")
      button2.classList.add("button1")
      button1.innerHTML = "NOT ME"
      button2.innerHTML = "NOT ME"
      button1.classList.add("taco")
      button1.classList.remove("initial")
      button3.classList.add("button1")
      button3.classList.add("yeah")
      button3.innerHTML = "ME"
      
    }
    if (clicks ==32){

      button2.classList.add("invis")
button3.classList.add("invis")
button2.classList.remove("button1")
button3.classList.remove("button1")
      texxt.innerHTML = "WHY DO YOU INSIST ON CLICKING ME!!!"
      button1.classList.remove("taco")
      button1.classList.add("initial")
      button1.classList.add("growshrink")
      button1.innerHTML="CLICK"
      button3.innerHTML=""
      button2.innerHTML=""

    }
    if (clicks==33){
      button1.classList.remove("growshrink")
      texxt.innerHTML="i give up."
      button1.innerHTML="DONT PRESS"
    }
    if (clicks==34) {
      texxt.innerHTML="i cant do this anymore"
    }
    if (clicks==35) {
      texxt.innerHTML="goodbye"
    }
    if(clicks== 40){
    texxt.innerHTML = "WHY WONT YOU STOP"
    }
    if(clicks==41){
      button1.classList.remove("initial");
      button1.classList.add("mom_look_im_a_star");
      texxt.innerHTML = "WIP";
      button1.innerHTML = "";
     body.classList.add("bg")
      button_trail1.classList.add("button_trail1")
      button_trail2.classList.add("button_trail2")
    }
    if (clicks==45) {
      texxt.innerHTML = "here, something until 100"
    button1.classList.add("running")
    }
    if(clicks==100){
      button1.classList.remove("running")
      stache.classList.remove("stache")
      button1.classList.add("mover")
      texxt.innerHTML = "I HAVE REACHED MY ULTIMATE STATE YOU CANT CATCH ME"
    }
}


button1.addEventListener("click", yellatuser);