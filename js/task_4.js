const ref = {
    counterBlock: document.querySelector('#counter'),
    counterValue: document.querySelector('#value'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
};

let counterValue = 0;

const resetBtn = document.createElement('button');
resetBtn.setAttribute('type', 'button');
resetBtn.textContent = 'Reset';
ref.counterBlock.appendChild(resetBtn);


ref.incrementBtn.addEventListener('click', onIncrement);
ref.decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onResetEvents);

function onIncrement() {
    counterValue += 1;
    changeValue()
};
function onDecrement() {
    counterValue -= 1;
    changeValue()
};
function onResetEvents() {
  ref.counterValue.textContent = 0;
};
function changeValue() {
    ref.counterValue.textContent = counterValue;
}






