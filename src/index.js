const hamX1 = document.querySelector(".ham-x1");
const hamX2 = document.querySelector(".ham-x2");
const hamMenu = document.getElementById("hamMenu");
const mobileMenu = document.getElementById("mobile-menu");

function toggleMenu() {
  hamX1.classList.toggle("translate-y-1");
  hamX1.classList.toggle("rotate-45");
  hamX2.classList.toggle("w-6");
  hamX2.classList.toggle("-translate-y-1");
  hamX2.classList.toggle("-rotate-45");
  hamX2.classList.toggle("w-4");
  mobileMenu.classList.toggle("invisible");
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("opacity-100");
}

// A flag to indicate if the menu is open or not
let menuOpen = false;

// A function to close the menu if it is open
function closeMenu() {
  if (menuOpen) {
    toggleMenu();
    menuOpen = false;
  }
}

// Add a click event listener to the hamburger menu
hamMenu.addEventListener("click", function () {
  // Toggle the menu and update the flag
  toggleMenu();
  menuOpen = !menuOpen;
});

// Add a click event listener to the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is outside of the hamburger menu
  // and its children using contains()
  if (!hamMenu.contains(event.target)) {
    // Close the menu if it is open
    closeMenu();
  }
});
let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("wiggle");
      }
    });
  },
  { threshold: 1.0 }
);

document.querySelectorAll(".why-choose-us, .our-process").forEach((img) => {
  observer.observe(img);
});

document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
  });

//end dark mode

//carousel

const slidesContainer = document.querySelector(".slides-container");
const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  slidesContainer.scrollLeft -= slideWidth;
});
