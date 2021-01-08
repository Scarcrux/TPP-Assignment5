let cells = 1;
let currentColor = "darkslategray";

// Utility Function - Requirement 6: Change Color
function changeColor() {
  this.style.backgroundColor = currentColor;
  this.classList.remove("uncolored");
}

// Utility Function
createCell = (className) => {
  let cell = document.createElement("td");
  cell.classList.add(className);
  cell.classList.add("uncolored");
  // Requirement 6: Change Color
  cell.addEventListener("click", changeColor);
  return cell;
}

// Requirement 1: Add Row
addRow = () => {
  let grid = document.getElementById("grid");
  let newRow = document.createElement("tr");
  newRow.classList.add("grid-row");
  grid.appendChild(newRow);

  for (let i = 0; i < cells; i++) {
    newRow.appendChild(createCell("grid-cell"));
  }
}

// Requirement 2: Add Column
addColumn = () => {
  let grid = document.getElementById("grid");
  let rows = grid.getElementsByClassName("grid-row");

  for (let i = 0; i < rows.length; i++) {
    rows[i].appendChild(createCell("grid-cell"));
  }

  cells++;
}

// Requirement 3: Remove Row
removeRow = () => {
  let grid = document.getElementById("grid");

  grid.deleteRow(grid.rows.length - 1);
}

// Requirement 4: Remove Column
removeColumn = () => {
  let grid = document.getElementById("grid");
  let lastColumn = grid.rows[0].cells.length - 1;

  for (let i = 0; i < grid.rows.length; i++) {
    grid.rows[i].deleteCell(lastColumn);
  }

  cells--;
}

// Requirement 5: Select Color
function pickNeonGreen() {
  currentColor = "#39FF14";
  let c = document.getElementById("CC")
  c.innerText = "Color: Neon Green"
}

function pickPurple() {
  currentColor = "#6A0DAD";
  let c = document.getElementById("CC")
  c.innerText = "Color: Purple"
}

function colorRevert() {
  currentColor = "darkslategray";
  let c = document.getElementById("CC")
  c.innerText = "Color: Gray"
}

// Requirement 7: Fill All Uncolored Cells with Current Color
fillAllUncolored = () => {
  let cells = document.getElementsByClassName("grid-cell");
  let uncolored = [...cells].filter(cell => cell.classList.contains("uncolored"));

  uncolored.forEach (cell => {
    cell.style.backgroundColor = currentColor;
    cell.classList.remove("uncolored");
  });
}

// Requirement 8: Fill All Cells with Current Color
fillAllCells = () => {
  let cells = document.getElementsByClassName("grid-cell");

  [...cells].forEach(cell => {
    cell.style.backgroundColor = currentColor;
    cell.classList.remove("uncolored");
  });
}

// Requirement 9: Clear All Cells
clearAllCells = () => {
  let cells = document.getElementsByClassName("grid-cell");

  [...cells].forEach (cell => {
    cell.style.backgroundColor = "";
    cell.classList.add("uncolored");
  });
}
