let Sum = num => {
  let total = num;
  return function sum(num2){
    if (num2) {
      total += num2;
      return sum;
    }
    return total;
  }
}

Sum = num => {
  return function sum(_num){
    if (_num) {
      num += _num;
      return sum;
    }
    return num;
  }
}

const sum = Sum(3)(4)(3)(4)(7)();

console.log("total: ", sum);

