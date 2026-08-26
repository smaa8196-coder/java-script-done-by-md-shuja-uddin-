const nodes = document.querySelector("#nodes-container");
const bttn =document.querySelector("#btn");
let mode =document.querySelectorAll(".inputbox");

bttn.addEventListener("click",()=>{
    let inputboxx = document.createElement("p");
    let img = document.createElement("img");
    inputboxx.className="inputbox";
    inputboxx.setAttribute("contenteditable","true");
    img.src ="123.png";
    img.className="gfhjjhkjkj";
    nodes.appendChild(inputboxx).appendChild(img);
    saveData()
});

nodes.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
    saveData()
});


function saveData(){
    localStorage.setItem("data",nodes.innerHTML);
}
function showDown(){
    nodes.innerHTML=localStorage.getItem("data");
}
showDown()