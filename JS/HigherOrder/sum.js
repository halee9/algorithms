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



const Sum2 = num => {
  num += num;
  if (num) Sum2;
  return num;
}

const sum2 = Sum(3)(4)(3)();
console.log("total: ", sum2);