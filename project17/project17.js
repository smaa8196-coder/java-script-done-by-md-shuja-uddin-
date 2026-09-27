let pass = document.getElementById("password");
let meg = document.getElementById("message");
let st = document.getElementById("span");

pass.addEventListener('input',()=>{
    if(pass.value.length >0){
        meg.style.display="block";
    }
    else{
        meg.style.display="none";
    }
    if(pass.value.length < 4){
        st.innerHTML ="weak";
        pass.style.borderColor ="red";
        meg.style.color="red";
    }
    else if(pass.value.length >= 4 &&  pass.value.lenght < 8 ){
        st.innerHTML ="medium";
          pass.style.borderColor ="yellow";
        meg.style.color="yellow";
    }
    else if (pass.value.length >= 8){
        st.innerHTML ="strong";
          pass.style.borderColor ="green";
        meg.style.color="green";
    }
})