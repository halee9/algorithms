class Islands {
  constructor(map){
    this.map = map;
    this.ROW = map.length || 0;
    this.COL = map[0].length || 0;
    this.visited = new Array(this.ROW).fill(false).map(a => new Array(this.COL).fill(false));
  }

  isNewLand(row, col) {
    return row >= 0 && row < this.ROW && col >= 0 && col < this.COL
      && this.map[row][col] === 1 && !this.visited[row][col];
  }

  DFS(row, col) {
    const rowIndex = [ -1, -1, -1, 0, 0, 1, 1, 1 ];
    const colIndex = [ -1, 0, 1, -1, 1, -1, 0, 1 ];
    
    this.visited[row][col] = true;
    console.log(row, col)
  
    for (let k=0; k<8; k++){
      if (this.isNewLand(row+rowIndex[k], col+colIndex[k])){
        this.DFS(row+rowIndex[k], col+colIndex[k]);
      }
    }
  }

  countIslands() {
    let count = 0;
  
    for (let i=0; i<this.ROW; i++){
      for (let j=0; j<this.COL; ++j){
        if (this.map[i][j] == 1 && !this.visited[i][j]){
          this.DFS(i, j);
          count++;
        }
      }
    }
    return count;
  }
  
}

const map = [
	[ 1, 1, 0, 0, 0 ],
	[ 0, 1, 0, 0, 1 ],
	[ 1, 0, 0, 1, 1 ],
	[ 0, 0, 0, 0, 0 ],
	[ 1, 1, 1, 0, 1 ],
];
const islands = new Islands(map);
console.log('Number of Islands: ', islands.countIslands());

