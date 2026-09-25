let password = document.getElementById("password");
let imgg = document.getElementById("imgg");

imgg.onclick =  function(){
    if(password.type=="password"){
        password.type="text";
        imgg.src="eye-open-removebg-preview.png";

    }else{
        password.type ="password";
        imgg.src="eye-close-removebg-preview.png";

    }
}