const reduce = (array, fn, init=0) => {
  let acc = init;
  for (let i=0; i<array.length; i += 1){
    acc = fn(acc, array[i], i, array);
  }
  return acc;
}

const arr = [3,4,5,6];

const newArr = reduce(arr, (acc, item) => acc += item, 0);
console.log(newArr);

const newArr2 = reduce(arr, (acc, item) => {
  acc.push(item);
  return acc;
}, []);
console.log(newArr2);

const newArr3 = reduce(arr, (acc, item) => {
  acc = { ...acc, [item]: item };
  return acc;
}, {});
console.log(newArr3);
