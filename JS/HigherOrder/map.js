const map = (array, fn) => {
  let results = [];
  for (let i=0; i<array.length; i += 1){
    results.push(fn(array[i], i, array));
  }
  return results;
}

const arr = [3,4,5,6];

const newArr = map(arr, item => item * 2);
console.log(newArr);
