class BubbleSort {
  constructor(data){
    this.data = data;
  }

  sort() {
    for (let i=0; i<this.data.length; i++){
      for (let j=0; j<this.data.length-1; j++){
        if (this.data[j] > this.data[j+1]){
          const temp = this.data[j];
          this.data[j] = this.data[j+1];
          this.data[j+1] = temp;
        }
      }
    }
    return this.data;
  }
}

const data = [5,6,7,8,3,2];

const bubbleSort = new BubbleSort(data);
console.log("Bubble Sort: ", bubbleSort.sort());