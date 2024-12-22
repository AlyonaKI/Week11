const cartSumItem1 = document.getElementById("cartSumItem1");
const cartSumItem2 = document.getElementById("cartSumItem2");
const cartSumItem3 = document.getElementById("cartSumItem3");
const cartSumItem4 = document.getElementById("cartSumItem4");

const totalCartSum = document.getElementById("totalCartSum");

const discountBtn = document.getElementById("discountBtn");

const price1 = +cartSumItem1.innerHTML;
const price2 = +cartSumItem2.innerHTML;
const price3 = +cartSumItem3.innerHTML;
const price4 = +cartSumItem4.innerHTML;

const totalPrice = price1 + price2 + price3 + price4;

totalCartSum.innerHTML = `${totalPrice} руб.`;

function applyDiscount() {
  const discountedPrice = totalPrice * 0.8;
  totalCartSum.innerHTML = discountedPrice.toFixed(2);
}

discountBtn.addEventListener("click", applyDiscount);
