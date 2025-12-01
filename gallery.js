const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("show"));
});

const cards = document.querySelectorAll(".card");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,0.9)";
lightbox.style.display = "none";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.zIndex = "2000";
document.body.appendChild(lightbox);

const img = document.createElement("img");
img.style.maxWidth = "80%";
img.style.maxHeight = "80%";
img.style.borderRadius = "10px";
img.style.transition = "transform 0.3s";
lightbox.appendChild(img);

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

cards.forEach(card => {
  card.addEventListener("click", () => {
    img.src = card.querySelector("img").src;
    img.style.transform = "scale(0.8)";
    lightbox.style.display = "flex";
    setTimeout(() => { img.style.transform = "scale(1)"; }, 10);
  });
});
