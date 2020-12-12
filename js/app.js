let sildes = document.querySelectorAll(".top-slider .slide");
let slideCounter=0;
document.getElementById("next-btn").addEventListener("click",()=>{
slideCounter++;
console.log(sildes);
})
document.getElementById("prev-btn").addEventListener("click",()=>{
    slideCounter--;
})