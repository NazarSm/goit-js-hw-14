const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
    const categoryName = categoryItem.firstElementChild.textContent;
    const categoryItemsCount = categoryItem.lastElementChild.children.length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemsCount}`);
});
