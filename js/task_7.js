const ref = {
    inputRange: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

ref.text.style.fontSize = '50px'

ref.inputRange.addEventListener('input', (e) => {
    ref.text.style.fontSize = `${e.target.value}px`
});




