const btnMenu = document.getElementById("btn-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll(".menu-link");
const heroSection = document.getElementById("hero-section");
const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back");
const titleProject = document.getElementById("title-project");

btnMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  console.log("btn clicked");
});

// console.log(menuLinks);
menuLinks.forEach((element) => {
  element.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

const heroImages = [
  {
    title: "National University of Architecture",
    src: "url('../assets/images/hero-bg.png')",
  },
  {
    title: "The Essence of Modern Architecture",
    src: "url('../assets/images/hero-bg2.jpg')",
  },
  {
    title: "A Journey into Modern Spaces",
    src: "url('../assets/images/hero-bg3.jpg')",
  },
];

// console.log(heroImages.length - 1);
let currentIndex = 0;
const updateImage = () => {
  heroSection.style.backgroundImage = heroImages[currentIndex].src;
  titleProject.innerText = heroImages[currentIndex].title;
  console.log(currentIndex);
};
heroSection.style.backgroundImage = heroImages[currentIndex].src;
btnNext.addEventListener("click", () => {
  if (currentIndex >= heroImages.length - 1) {
    currentIndex = 0;
    updateImage();
  } else {
    currentIndex++;
    updateImage();
  }
});
btnBack.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = 2;
    updateImage();
  } else {
    currentIndex--;
    updateImage();
  }
});
