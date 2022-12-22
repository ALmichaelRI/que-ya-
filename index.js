const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click", function () {
    alert("tenias que decir que si xd")
});

const noBtn= document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function () {
    const randomX =parseInt(Math.random()*100);
    const ramdomY=parseInt(Math.random()*100); 
    noBtn.style.setProperty("top",ramdomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setProperty("transform",`translate(-${randomX}%,-${ramdomY}%)`);
})