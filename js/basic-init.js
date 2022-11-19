"use strict";

var hamburger = document.getElementById('hamburger');
var navUL = document.getElementById('navUL');
hamburger.addEventListener('click', function () {
  navUL.classList.toggle('show');
});

function closeHamburger() {
  navUL.classList.remove('show');
}

var main = document.getElementById("main");
var mainbtn = document.getElementById('mainScroll');

function mainHandleButtonClick() {
  main.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

mainbtn.addEventListener('click', mainHandleButtonClick);
mainbtn.addEventListener('click', closeHamburger);
var about = document.getElementById("about");
var aboutbtn = document.getElementById('aboutScroll');

function aboutHandleButtonClick() {
  about.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

aboutbtn.addEventListener('click', aboutHandleButtonClick);
aboutbtn.addEventListener('click', closeHamburger);
var advantages = document.getElementById("advantages");
var advantagesbtn = document.getElementById('advantagesScroll');

function advantagesHandleButtonClick() {
  advantages.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

advantagesbtn.addEventListener('click', advantagesHandleButtonClick);
advantagesbtn.addEventListener('click', closeHamburger);
var questions = document.getElementById("questions");
var questionsbtn = document.getElementById('questionsScroll');

function questionsHandleButtonClick() {
  questions.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

questionsbtn.addEventListener('click', questionsHandleButtonClick);
questionsbtn.addEventListener('click', closeHamburger);
var footer = document.getElementById("footer");
var footerbtn = document.getElementById('footerScroll');

function footerHandleButtonClick() {
  footer.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

footerbtn.addEventListener('click', footerHandleButtonClick);
footerbtn.addEventListener('click', closeHamburger);
var footer = document.getElementById("footer");
var mainContactbtn1 = document.getElementById('mainContact1');

function mainContact1HandleButtonClick() {
  footer.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

mainContactbtn1.addEventListener('click', mainContact1HandleButtonClick);

var mainContactbtn2 = document.getElementById('mainContact2');

function mainContact2HandleButtonClick() {
  footer.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

mainContactbtn2.addEventListener('click', mainContact2HandleButtonClick);

const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active")
  })
})
