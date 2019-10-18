const ROW = 5;
const COL = 5;

const isNewLand = (map, row, col, visited) => {
  return (row >= 0) && (row < ROW) && (col >= 0) && (col < COL)
    && (map[row][col] === 1 && !visited[row][col]);
}

const DFS = (map, row, col, visited) => {
	const rowIndex = [ -1, -1, -1, 0, 0, 1, 1, 1 ];
  const colIndex = [ -1, 0, 1, -1, 1, -1, 0, 1 ];
  
  visited[row][col] = true;
  console.log(row, col)

  for (let k=0; k<8; k++){
    if (isNewLand(map, row+rowIndex[k], col+colIndex[k], visited)){
      DFS(map, row+rowIndex[k], col+colIndex[k], visited);
    }
  }
}

const countIslands = map => {
  let visited = new Array(ROW).fill(false).map(a => new Array(COL).fill(false));
  let count = 0;

  for (let i=0; i<ROW; i++){
    for (let j=0; j<COL; ++j){
      if (map[i][j] == 1 && !visited[i][j]){
        DFS(map, i, j, visited);
        count++;
      }
    }
  }
  return count;
}

const map = [
	[ 1, 1, 0, 0, 0 ],
	[ 0, 1, 0, 0, 1 ],
	[ 1, 0, 0, 1, 1 ],
	[ 0, 0, 0, 0, 0 ],
	[ 1, 1, 1, 0, 1 ],
];
const count = countIslands(map);
console.log('Number of Islands: ', count);

