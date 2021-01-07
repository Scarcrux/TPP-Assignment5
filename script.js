let cells = 1;

// Utility Function
createCell = (className) => {
  let cell = document.createElement("td");
  cell.classList.add(className);
  cell.classList.add("uncolored");
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
