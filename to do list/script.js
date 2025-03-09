const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.querySelector("#row").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const value = ev.target.elements.item("input").value;
  addTask(value);
});

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
    return;
  }
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      saveData();
    } else if (ev.target.tagName === "SPAN") {
      ev.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
// let todos = [{ Text: "hello", completed: false, id: crypto.randomUUID() }];
