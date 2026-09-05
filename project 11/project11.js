let progress = document.getElementById("pro");
let songg = document.getElementById("song");
let startt = document.getElementById("start");

songg.onloadedmetadata = function(){
    progress.max=songg.duration;
    progress.value=song.currentTime;

}

songg.addEventListener("timeupdate", function () {
    progress.value = songg.currentTime;
});

//  function move(){
//     if(startt.classList.contains("fa-pause")){
//         songg.pause();
//         startt.classList.remove("fa-pause");
//         startt.classList.add("fa-play");
//     }else{
//          songg.play();
//         startt.classList.remove("fa-play");
//         startt.classList.add("fa-pause");
//     }
// }

function move() {

    if (songg.paused) {

        songg.play();

        // Change SVG path to pause
        startt.innerHTML = `
            <path d="M320-200v-560h120v560H320Zm200 0v-560h120v560H520Z"/>
        `;

    } else {

        songg.pause();

        // Change SVG path to play
        startt.innerHTML = `
            <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/>
        `;
    }
}

progress.addEventListener("input", function () {
    songg.currentTime = progress.value;
});


// When song finishes
songg.addEventListener("ended", function () {

    startt.innerHTML = `
        <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/>
    `;

    progress.value = 0;
});