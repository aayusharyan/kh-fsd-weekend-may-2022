let arr = [1, 2, 3, 4, 5, 6, 7];
arr.push(8);
console.log(arr);

arr.splice(2, 0, "Three", "Four");
console.log(arr);

console.log(arr.indexOf("Three"));

const parent = document.getElementById("container");
arr.forEach(function(elem) {
  // console.log(elem, idx);
  let new_li = document.createElement('li');
  new_li.innerText = elem;
  parent.appendChild(new_li);
})
