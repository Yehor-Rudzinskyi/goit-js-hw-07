const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const makeListFromArrow = function (arr) {
    const liRef = document.createElement('li')
    liRef.textContent = arr;
    return liRef
}
const ingredientsLists = ingredients.map((product) => makeListFromArrow(product));


const addToIngredients = document.querySelector('#ingredients')
addToIngredients.append(...ingredientsLists);

console.log(ingredientsLists);