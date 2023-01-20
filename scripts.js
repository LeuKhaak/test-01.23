const popUp = document.querySelector(".popup");

const allSections = document.querySelector(".show-all-sections");

const showPopUp = () => {
  popUp.classList.add("show-popup");
  allSections.classList.add("all-sections");
};

const closePopUp = () => {
  popUp.classList.remove("show-popup");
  allSections.classList.remove("all-sections");
};
