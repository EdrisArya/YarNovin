let sildes = document.querySelectorAll(".slide");
let slideCounter=0;
document.getElementById("next-btn").addEventListener("click",()=>{
if(slideCounter<sildes.length-1){
    slideCounter++;
    setTimeout(()=>{
        console.log(slideCounter);
        for(let i = 0;i<sildes.length;i++){
            slides[i].
        }
    },1000)
}else{
    slideCounter=0;
    setTimeout(()=>{
        console.log(slideCounter);
    },1000)
}
})
document.getElementById("prev-btn").addEventListener("click",()=>{
    slideCounter--;
})