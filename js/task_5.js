const ref = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};



ref.nameInput.addEventListener('input', event => {
    ref.nameOutput.textContent = event.target.value;
    if (event.target.value === '') {
        ref.nameOutput.textContent = 'незнакомец';
    }
});
