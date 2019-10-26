const Sum = num => {
  let total = num;
  return function sum(num2){
    if (num2) {
      total += num2;
      return sum;
    }
    return total;
  }
}

const sum = Sum(3)(4)(3)();

console.log("total: ", sum);

