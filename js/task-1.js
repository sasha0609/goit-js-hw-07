const itemsOfList = document.querySelectorAll(".item");
const numberOfCategories = "Number of categories : " + itemsOfList.length;
console.log(numberOfCategories);
for (const item of itemsOfList) {
  const category = "Category : " + item.querySelector("h2").textContent;
  const elements = "Elements : " + item.querySelectorAll("li").length;
  console.log(category);
  console.log(elements);
}
