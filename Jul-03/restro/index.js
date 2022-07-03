// alert("Hey");

let totalPrice = 0;
let items = [];

function reset() {
  totalPrice = 0;
  items = [];
  updateBill();
}

function orderDosa() {
  totalPrice = totalPrice + 1;
  items.push("Dosa");
  updateBill();
}

function orderRice() {
  // totalPrice = totalPrice + 1.2;
  totalPrice += 1.2;
  items.push("Rice")
  updateBill();
}

function orderCurry() {
  totalPrice += 1.5;
  items.push("Curry")
  updateBill();
}

function orderBread() {
  totalPrice += 0.75;
  items.push("Bread");
  updateBill();
}

function OrderDrink() {
  totalPrice += 1.10;
  items.push("Cold Drink");
  updateBill();
}

function updateBill() {
  let price_element   = document.getElementById('amount');
  let parent_ul       = document.getElementById('item_list');
  parent_ul.innerText = "";

  for(let i = 0; i < items.length; i += 1) {
    let new_li = document.createElement("li");
    new_li.innerText = items[i];
    parent_ul.appendChild(new_li);
  }

  price_element.innerText = totalPrice;

  // document.getElementById('amount').innerText = totalPrice;
}

