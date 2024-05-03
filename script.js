const inputField = document.querySelector('input');
const goButton = document.querySelector('.go');
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
const footerA = document.querySelector('.footer--a');
const errorMessage = document.querySelector('.error');
let errorNum = 0;

goButton.addEventListener('click', function() {
    let inputValue = inputField.value;
    if (!emailPattern.test(inputValue)) {
        inputField.style.border = '2px solid red';
        inputField.style.color = 'red';
        if(errorNum ===0){
            errorNum++;
            errorMessage.classList.remove('hidden');
        }
        
      }
})
