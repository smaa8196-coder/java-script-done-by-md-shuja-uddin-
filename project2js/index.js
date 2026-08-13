const getcolor= ()=>{
    const random=Math.floor(Math.random()*16777215);
    const rrandom ="#"+ random.toString(16);
    document.body.style.backgroundColor=rrandom;
    document.getElementById("code").innerText=rrandom;
}

document.getElementById("coder").addEventListener(
    "click",
    getcolor
)
getcolor();