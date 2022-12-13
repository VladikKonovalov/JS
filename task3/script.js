const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightE2 = document.querySelector('#trafficLight');
const trafficLightE3 = document.querySelector('#trafficLight');


function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    
}
trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);
}
trafficLightE2.addEventListener('click', makeYellow);



function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeGreen);
}
trafficLightE3.addEventListener('click', makeGreen);









