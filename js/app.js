const item = document.getElementById("dragItem");
const container2 = document.getElementById("container2");

// Cuando empieza el drag
item.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("idArrastrable", item.id);
});

// Permitir drop en el destino
container2.addEventListener("dragover", (e) => {
  e.preventDefault(); // necesario para poder soltar el elemento
  container2.classList.add("over");
});


// Cuando se suelta el elemento
container2.addEventListener("drop", (e) => {
  e.preventDefault();  
  container2.classList.remove("over");
  const id = e.dataTransfer.getData("idArrastrable");
  const draggedElement = document.getElementById(id);

  container2.appendChild(draggedElement);
});