const consoleLog = document.querySelector('#consoleLog');
const alerT = document.querySelector('#alerT');
const prompT = document.querySelector('#prompT');


consoleLog.addEventListener('click', () => {
   alert('Служит для вывода информации в консоль') 
});



alerT.addEventListener('click', () => {
   alert('Служит для отображения диалогового окна') 
});



prompT.addEventListener('click', () => {
   alert('Служит для отображения диалогового окна с запросом на ввод текста') 
});