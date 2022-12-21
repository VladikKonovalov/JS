const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');
const b = document.querySelector('body');
const d = document.querySelector('div');

let count = 0;

d.addEventListener('click', () =>
{
    count++;
    switch (count) 
    {
     case 1: 
        console.log('1');
        trafficLightRed.style.background = ('black');
        trafficLightGreen.style.background = ('green');
        break;
    case 2:
        console.log('2');
        trafficLightGreen.style.background = ('black');
        trafficLightYellow.style.background = ('yellow');
        break;
     case 3: 
        console.log('3');
        trafficLightYellow.style.background = ('black');
        trafficLightRed.style.background = ('red');
        count = 0;
       
    }

})

