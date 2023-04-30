
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach(el => {
  // console.log(el)
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = el;
  ingredientsList.append(itemEl)
})
