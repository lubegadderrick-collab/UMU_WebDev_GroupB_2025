const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("show"));
});

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({behavior: 'smooth'});
}

const orderButtons = document.querySelectorAll(".order-btn");
const orderList = document.getElementById("order-list");
const checkoutBtn = document.getElementById("checkout-btn");

let orderItems = [];

orderButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.parentElement;
    const itemName = card.querySelector("h3").textContent;
    orderItems.push(itemName);
    renderOrder();
  });
});

function renderOrder() {
  orderList.innerHTML = "";
  orderItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    orderList.appendChild(li);
  });
}

checkoutBtn.addEventListener("click", () => {
  if(orderItems.length === 0){
    alert("Your order is empty!");
    return;
  }
  alert("Thank you! Your order has been placed:\n" + orderItems.join(", "));
  orderItems = [];
  renderOrder();
});

orderButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.parentElement;
    const itemName = card.querySelector("h3").textContent;

    if(card.classList.contains("selected")) {
      card.classList.remove("selected");
      orderItems = orderItems.filter(item => item !== itemName);
    } else {
      card.classList.add("selected");
      orderItems.push(itemName);
    }

    renderOrder();
  });
});

