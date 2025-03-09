const notesContainer = document.querySelector(".note-container");
const createBtn = document.getElementById("btn");
let note = document.querySelector(".input-box");

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function createNote(content = "") {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  inputBox.setAttribute("placeholder", " You can write your note here...");
  inputBox.innerHTML = content;

  img.src = "images/delete.png";
  img.className = "delete-icon";

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  img.addEventListener("click", () => {
    notesContainer.removeChild(inputBox);
    updateStorage();
  });

  inputBox.addEventListener("input", updateStorage);
}

createBtn.addEventListener("click", () => {
  createNote();
  updateStorage();
});

window.addEventListener("load", () => {
  let storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notesContainer.innerHTML = storedNotes;

    notesContainer.querySelectorAll(".input-box").forEach((note) => {
      note.querySelector("img").addEventListener("click", () => {
        notesContainer.removeChild(note);
        updateStorage();
      });

      note.addEventListener("input", updateStorage);
    });
  }
});
