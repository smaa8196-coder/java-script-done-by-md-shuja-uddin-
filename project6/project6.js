const password1 = document.getElementById("password");
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()/|+*-{}";

const length =12;

const alltype = upper+lower+number+symbol;

function copyPassword(){
    let strongPassword = "";
    strongPassword += upper[Math.floor(Math.random()*upper.length)];
    strongPassword += lower[Math.floor(Math.random()*lower.length)];
    strongPassword += number[Math.floor(Math.random()*number.length)];
    strongPassword += symbol[Math.floor(Math.random()*symbol.length)];

    while(strongPassword.length < length){
    strongPassword += alltype
    [Math.floor(Math.random()*alltype.length)
    ];
    }
    password1.value = strongPassword;
}

function newpassword(){
    password1.select();
    document.execCommand("copy");
}