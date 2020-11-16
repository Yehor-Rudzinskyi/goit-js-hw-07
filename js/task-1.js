const categoriesListItemRef = document.querySelectorAll('.item');
const quantityOfCategories = (ref) => console.log(`В списке ${ref.length} категории`);
quantityOfCategories(categoriesListItemRef);

const tittleRef = document.querySelectorAll('.item > h2');
tittleRef.forEach(element => {
    console.log(`\u2022 Категория: ${element.textContent}`);
    console.log(`\u2022 Количество элементов: ${element.parentNode.children[1].children.length}`);
});