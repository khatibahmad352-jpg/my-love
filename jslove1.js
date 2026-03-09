

function yespage(){
    window.location.href = "page2.html";
}
function nopage(){
    window.location.href = "page3.html";
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
