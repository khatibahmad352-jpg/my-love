
const noButton = document.getElementById("noButton");

let buttonX = window.innerWidth / 2 + 100;
let buttonY = window.innerHeight / 2;

noButton.style.position = "absolute";
noButton.style.left = buttonX + "px";
noButton.style.top = buttonY + "px";

document.addEventListener("mousemove", function(e){

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rect = noButton.getBoundingClientRect();

    const buttonCenterX = rect.left + rect.width/2;
    const buttonCenterY = rect.top + rect.height/2;

    const distanceX = mouseX - buttonCenterX;
    const distanceY = mouseY - buttonCenterY;

    const distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY);

    const safeDistance = 80;

    if(distance < safeDistance){

        const angle = Math.atan2(distanceY, distanceX);

        const pushStrength = 6;

        buttonX -= Math.cos(angle) * pushStrength;
        buttonY -= Math.sin(angle) * pushStrength;

        noButton.style.left = buttonX + "px";
        noButton.style.top = buttonY + "px";
    }

});

function finalpage(){
    window.location.href = "lastpage.html";
}

// Floating hearts
function createHeart(){

    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random()*30+ 30) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,150);
