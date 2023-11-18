/*
Filename: MazeSolver.js
Content: A sophisticated maze solver algorithm implemented in JavaScript.
*/

// Define a class to represent a maze
class Maze {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = new Array(rows);

    for (let i = 0; i < rows; i++) {
      this.grid[i] = new Array(cols);
      for (let j = 0; j < cols; j++) {
        this.grid[i][j] = new Cell(i, j);
      }
    }
  }

  // Set the start and end points in the maze
  setStartEnd(startRow, startCol, endRow, endCol) {
    this.start = this.grid[startRow][startCol];
    this.end = this.grid[endRow][endCol];
  }

  // Create a wall in the specified cell
  createWall(row, col) {
    this.grid[row][col].isWall = true;
  }

  // Check if a cell is valid (within maze boundaries)
  isValidCell(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }
}

// Define a class to represent a cell in the maze
class Cell {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.visited = false;
    this.isWall = false;
    this.neighbors = [];
  }

  // Add a neighboring cell to this cell's list of neighbors
  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }
}

// Define a class to implement the maze solving algorithm
class MazeSolver {
  constructor(maze) {
    this.maze = maze;
    this.path = [];
  }

  // Solve the maze using Depth First Search algorithm
  solve() {
    const startCell = this.maze.start;
    const endCell = this.maze.end;
    this.dfs(startCell, endCell);
    return this.path;
  }

  dfs(cell, endCell) {
    cell.visited = true;
    if (cell === endCell) {
      this.path.push(cell);
      return;
    }

    for (let neighbor of cell.neighbors) {
      if (!neighbor.visited && !neighbor.isWall) {
        this.path.push(cell); // Add the current cell to the path
        this.dfs(neighbor, endCell);
      }
    }
  }
}

// Create a maze and set its start and end points
const maze = new Maze(10, 10);
maze.setStartEnd(0, 0, 9, 9);

// Add walls to the maze
maze.createWall(1, 1);
maze.createWall(1, 2);
maze.createWall(2, 2);
maze.createWall(3, 2);
maze.createWall(3, 3);
maze.createWall(3, 4);
maze.createWall(4, 4);
maze.createWall(5, 4);
maze.createWall(6, 4);
maze.createWall(6, 3);
maze.createWall(7, 3);
maze.createWall(7, 2);
maze.createWall(7, 1);
maze.createWall(7, 0);
maze.createWall(8, 1);
maze.createWall(8, 2);
maze.createWall(9, 2);

// Connect neighboring cells in the maze
for (let row = 0; row < maze.rows; row++) {
  for (let col = 0; col < maze.cols; col++) {
    const cell = maze.grid[row][col];
    const neighbors = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ];

    for (let [nRow, nCol] of neighbors) {
      if (maze.isValidCell(nRow, nCol)) {
        const neighbor = maze.grid[nRow][nCol];
        cell.addNeighbor(neighbor);
      }
    }
  }
}

// Solve the maze
const mazeSolver = new MazeSolver(maze);
const solutionPath = mazeSolver.solve();

// Print the solution path
console.log("Solution Path:");
for (let cell of solutionPath) {
  console.log(cell.row, cell.col);
}