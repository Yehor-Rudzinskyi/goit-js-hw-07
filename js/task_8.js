const ref = {
    inputQuantity: document.querySelector('#controls input'),
    renderBtn: document.querySelector('button[data-action="render"]'),
    desrtoyBtn: document.querySelector('button[data-action="destroy"]'),
    conteinerForBox: document.querySelector('#boxes'),
}

ref.renderBtn.addEventListener('click', () => {
    createBoxes(ref.inputQuantity.value)
    ref.inputQuantity.value = '';
})

ref.desrtoyBtn.addEventListener('click', onDestroyBoxes)


function createBoxes(amount) {
    
    for (let i = 0; i < amount; i += 1) {
        if (amount > 100) {
            break
        } else {
            const boxForDiv = document.createElement('div');
            boxForDiv.style.width = `${30+i*10}px`
            boxForDiv.style.height = `${30+i*10}px`
            boxForDiv.style.backgroundColor = random_rgba();
            ref.conteinerForBox.appendChild(boxForDiv);
           
    
        }
    }

}
function onDestroyBoxes() {
        while (ref.conteinerForBox.firstChild) {
  ref.conteinerForBox.removeChild(ref.conteinerForBox.firstChild);
    };
};

function random_rgba() {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}










