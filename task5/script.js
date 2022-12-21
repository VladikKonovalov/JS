const but = document.querySelector('button');
let b = document.querySelector('#duplicateField');
let input = document.querySelector('.inp');



addEventListener("keyup", () => {
    b.textContent = (input.value);
})


but.addEventListener('click', () => {
    
    a = document.querySelector('input').value;
    console.log(a);
    b.textContent = "";
   
}
)

