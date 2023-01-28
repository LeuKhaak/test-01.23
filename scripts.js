const popUp = document.querySelector(".popup");

const allSections = document.querySelector(".show-all-sections");

const coursesList = document.querySelector(".courses-list");

const arrow = document.querySelector(".arrow");

const nav = document.querySelector(".navigation");

const hamburger = document.querySelector(".hamburger");

const showPopUp = () => {
  popUp.classList.add("show");
  allSections.classList.add("all-sections");
};

const closePopUp = () => {
  console.log("CLOSE");
  popUp.classList.remove("show");
  allSections.classList.remove("all-sections");
};

const toggleCoursesList = () => {
  // if (document.documentElement.clientWidth < 361) return;
  coursesList.classList.toggle("show");
  arrow.classList.toggle("rotation");
};

const toggleMenu = () => {
  nav.classList.toggle("not-show");
  hamburger.classList.toggle("close-menu");
};

const sliderGallery = document.querySelector(".slider-gallery ");

const person = document.querySelector(".person");

const list = sliderGallery.querySelectorAll(".person");

let newWidth = 0;

const moveLeft = () => {
  const itemWidth = person.clientWidth;
  const allWidth = itemWidth * list.length;
  if (newWidth < allWidth - itemWidth) {
    newWidth += itemWidth;
    sliderGallery.style.marginLeft = `-${newWidth}px`;
  }
};

const moveRight = () => {
  const itemWidth = person.clientWidth;
  if (newWidth > 0) {
    newWidth -= itemWidth;
    sliderGallery.style.marginLeft = `-${newWidth}px`;
  }
};

// courses-list
