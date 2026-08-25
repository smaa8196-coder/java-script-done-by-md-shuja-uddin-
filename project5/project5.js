const contianer1 = document.getElementById("container");
const taskList = document.getElementById("list");

function addList(){
    if(contianer1.value === ''){
        alert("please  make a list");
    }else{
        let li =document.createElement("li");
        li.innerText = contianer1.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    contianer1.value = '';
    saveData();
}

taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("huygyugy");
        saveData();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}

function showdata(){
    taskList.innerHTML= localStorage.getItem("data");
}
showdata();