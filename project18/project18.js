// let  speech = new SpeechSynthesisUtterance();

// let voices =[];

// let voiceSlector = document.querySelector("select")

// window.speechSynthesis.onvoiceschanged =() =>{
//     voices =window.speechSynthesis.getVoices();
//     speech.voices = voices[0];

//     voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.
//         name,i)))
// }
// voiceSelect.addEventListener("change",()=>{
//     speech.voice =voice[voiceSelect.value];
// });

// document.querySelector("button").addEventListener("click",()=>{
//     speech.text =document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// })


```javascript
let speech = new SpeechSynthesisUtterance();

let listen = document.getElementById("listen");

let text = document.querySelector(".div23");


listen.addEventListener("click", () => {

    speech.text = text.value;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

});
```
