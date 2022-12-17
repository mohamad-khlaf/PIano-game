
let range = document.getElementById("range");
let checkbox = document.getElementById("checkbox");
let keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("click", () =>  playTune(key.dataset.key)));


function playTune(key) {
    let audio = new Audio(`./sound/${key}.wav`);
    audio.volume = range.value;
    audio.play();
    addActive(document.querySelector(`[data-key=${key.toLocaleLowerCase()}]`));
}

let pattern = /(a|w|s|e|d|f|t|g|y|h|u|j|k|o|l|p|;)/i;

window.addEventListener("keypress", function(e) {
    if (pattern.test(e.key)) {        
        let audio = new Audio(`./sound/${e.key}.wav`);
        audio.volume = range.value;
        audio.play();
        addActive(document.querySelector(`[data-key=${e.key.toLocaleLowerCase()}]`));
    } else {
        console.log('noooooooo');
    }
})

function addActive(ele) {
    keys.forEach(function(key) { key.classList.remove("active") });
    ele.classList.add("active");
    setTimeout(function() {
        ele.classList.remove("active");
    }, 300)
}


checkbox.addEventListener("click", function() {
    
    document.querySelectorAll(".key span").forEach(function(key) {
        key.classList.toggle("hide");
    })
})