let menuItem = [
  "Dashboard",
  "Courses",
  "Batches",
  "Tasks",
  "Projects",
  "Queries",
  "Reports",
];

let container = document.querySelector(".container");
const ul = document.createElement("ul");

menuItem.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.style.listStyleType = "decimal";
  li.classList.add("clr");
  ul.appendChild(li);
});
container.appendChild(ul);

document.getElementsByClassName("methods")[0].classList.add("hide");
