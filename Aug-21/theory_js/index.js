const sum = (...nums) => {
  const total = nums.reduce((c, e) => c + e, 0);
  return total;
  // console.log(nums);
  // return a + b + c;
}
console.log(sum(10, 20, 50, 50, 10, 30, 70, 40, 15));

// console.log(Math.max(10, 20, 40, 70, 80, 100, -10, -50));

const mul = (a, b, c) => {
  return a * b * c;
}

console.log(mul(...[10, 40, 50, 00000, 0, 00]))