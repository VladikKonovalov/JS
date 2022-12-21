let userTextField = document.querySelector('a');

userTextField.addEventListener('click', (event) =>
{
    event.preventDefault();
    let userText = prompt('Введите новый текст ссылки');
    userTextField.textContent = userText;
})
