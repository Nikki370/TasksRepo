let noteInput = document.getElementById("noteInput");
let addBtn = document.getElementById("addBtn");
let noteList = document.getElementById("noteList");

window.onload = loadNotes;
addBtn.addEventListener("click", addNote);

function addNote() {
  let noteText = noteInput.value.trim();
  if (noteText === "") return alert("Please write something!");

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));

  noteInput.value = "";
  loadNotes();
}

function loadNotes() {
  noteList.innerHTML = "";
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note, index) => {
    let div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
    ${note}
    <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
    `;
    noteList.appendChild(div);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  loadNotes();
}
