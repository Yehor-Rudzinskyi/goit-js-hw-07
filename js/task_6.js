const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('input', () => {
    // console.log(inputRef.selectionEnd);
if (inputRef.value.length === Number(inputRef.dataset.length)) {
    onAddValid();
    onRemoveInValid();
  } else {
    onAddInvalid();
    onRemoveValid();
  }
});
function onAddValid() {
    inputRef.classList.add('valid');
}
function onAddInvalid() {
    inputRef.classList.add('invalid');
}
function onRemoveValid() {
    inputRef.classList.remove('valid');
}
function onRemoveInValid() {
    inputRef.classList.remove('invalid');
}

