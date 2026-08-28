let qrtext =  document.getElementById("qrtext");
let qrdiv = document.getElementById("qrdiv");
let qrimage = document.getElementById("qrimage");

function Generate(){
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"+qrtext.value;
}