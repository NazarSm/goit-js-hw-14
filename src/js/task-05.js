const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

const handleInput = () => {
    output.textContent = input.value ? input.value :  'Anonymous';
};

input.addEventListener('input', handleInput);