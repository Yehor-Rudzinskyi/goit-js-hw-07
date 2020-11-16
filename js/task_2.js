const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeLiFromArrow = function (arr) {
    const liRef = document.createElement('li')
    liRef.textContent = arr;
    return liRef
}

const ingredientList = ingredients.map((product) => makeLiFromArrow(product));


const listOfIngredients = document.querySelector('#ingredients')
listOfIngredients.append(...ingredientList);
