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
var pricing = document.getElementById("pricing");
var pricingbtn = document.getElementById('pricingScroll');

function pricingHandleButtonClick() {
  pricing.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

pricingbtn.addEventListener('click', pricingHandleButtonClick);
pricingbtn.addEventListener('click', closeHamburger);
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
var mainContactbtn = document.getElementById('mainContact');

function mainContactHandleButtonClick() {
  footer.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

mainContactbtn.addEventListener('click', mainContactHandleButtonClick);