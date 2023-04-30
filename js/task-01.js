

const categoriesList = document.getElementById("categories")

console.log(`Number of categories: ${categoriesList.children.length}`)

const mainItems = document.querySelectorAll(".item")
// console.log(mainItems)

mainItems.forEach(el => {
  const title = el.querySelector("h2")
  const li = el.querySelectorAll("li")
  console.log(` \nCategory: ${title.textContent}\nElements: ${li.length}\n \n`)


})







 