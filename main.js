let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header navbar a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector('header navbar a[href*="' + id + '"]')
          .classList.add("active");
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const homeSection = document.getElementById("home");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (
      scrollPosition >= homeSection.offsetTop &&
      !navbar.classList.contains("scrolled")
    ) {
      navbar.classList.add("scrolled");
    } else if (
      scrollPosition < homeSection.offsetTop &&
      navbar.classList.contains("scrolled")
    ) {
      navbar.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("navbar a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      removeActiveClass();
      link.classList.add("active");
    });
  });

  function removeActiveClass() {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }
});

window.addEventListener("scroll", function () {
  removeActiveClass("active");
});


document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.toggle-button');
  const menu = document.querySelector('.menu');

  toggleButton.addEventListener('click', function() {
      menu.classList.toggle('active');

  });
});
document.addEventListener('DOMContentLoaded', function() {
  const exit = document.querySelector('.exit-button');
  const menu = document.querySelector('.menu');

  exitButton.addEventListener('click', function() {
      menu.classList.toggle('close');

  });
});