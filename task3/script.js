const trafficLightEl = document.querySelector('#trafficLight');
// const trafficLightE2 = document.querySelector('#trafficLight');
// const trafficLightE3 = document.querySelector('#trafficLight');

trafficLightEl.addEventListener('click', makeGreen);
trafficLightEl.addEventListener('click', makeYellow);
trafficLightEl.addEventListener('click', makeRed);

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    
}

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}



function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}










