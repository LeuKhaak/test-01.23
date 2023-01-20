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

// courses-list
