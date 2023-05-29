const categoriesList = document.querySelectorAll('#categories .item');

// Кількість категорій
console.log(`Number of categories: ${categoriesList.length}`);

// Обробка кожної категорії
categoriesList.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li');
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
