const showPopUp = document.querySelector(".more-detail");

const showPopUp2 = document.querySelector(".more-2");

const showPopUp3 = document.querySelector(".more-3");

const showPopUp4 = document.querySelector(".more-4");

const popUp = document.querySelector(".popup");

const closePopUp = document.querySelector(".popup-close");

const allSections = document.querySelector(".show-all-sections");

showPopUp.addEventListener("click", function () {
  popUp.classList.add("show-popup");
  allSections.classList.add("all-sections");
});

showPopUp2.addEventListener("click", function () {
  popUp.classList.add("show-popup");
  allSections.classList.add("all-sections");
});

showPopUp3.addEventListener("click", function () {
  popUp.classList.add("show-popup");
  allSections.classList.add("all-sections");
});

showPopUp4.addEventListener("click", function () {
  popUp.classList.add("show-popup");
  allSections.classList.add("all-sections");
});

closePopUp.addEventListener("click", function () {
  popUp.classList.remove("show-popup");
  allSections.classList.remove("all-sections");
});

//		showRegForm.addEventListener('click', function() {
//			regForm.classList.add('show-popUp');
//		});  popup-close

//		showRegForm2.addEventListener('click', function() {
//			regForm.classList.add('show-popUp');
//		});

//		let closeRegForm = document.querySelector('.close'),
//			closeForm = document.querySelector('.popUp');
//		closeRegForm.addEventListener('click', function() {
//			closeForm.classList.remove('show-popUp');
//		});
