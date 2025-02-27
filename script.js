const button1 = document.getElementById("button1")
let clicks = 0
let texxt = "STOP TOUCHING ME"
function yellatuser(){
    alert(texxt); clicks++;
     console.log(clicks)
}
button1.addEventListener("click", yellatuser);
if (clicks == 1,2,3) {
    texxt = texxt + '!'
}