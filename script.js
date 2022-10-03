const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function(event) {
    jump();
})

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout (function() {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function (){
    let DinoTop = parseInt (window.getComputedStyle(dino).getPropertyValue("top"));
    let CactusLeft =   parseInt (window.getComputedStyle(cactus).getPropertyValue("left"));
 
    if (CactusLeft < 50 && CactusLeft > 0 && DinoTop >=140) {
        alert ("GAME OVER!")
    }
},10)