const btnMenu = document.getElementById("btn-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll(".menu-link");

btnMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  console.log("btn clicked");
});

console.log(menuLinks);
menuLinks.forEach((element) => {
  element.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

AOS.init();
