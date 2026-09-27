let scrollContianer =document.querySelector(".gallary");
let back=document.getElementById("back");
let front = document.getElementById("front");

scrollContianer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContianer.scrollLeft += evt.deltaY;
    scrollContianer.style.scrollBehavior ="auto";
});

front.addEventListener("click",()=>{
    scrollContianer.style.scrollBehavior ="smooth";
    scrollContianer.scrollLeft += 900;
})

back.addEventListener("click",()=>{
    scrollContianer.style.scrollBehavior ="smooth";
    scrollContianer.scrollLeft -= 900;
})