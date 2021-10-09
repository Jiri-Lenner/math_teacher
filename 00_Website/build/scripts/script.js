//navbar => sticky
let last_scroll;
let navbar;
window.addEventListener("scroll", function () {
  navbar = document.querySelector("body > header > nav");
  last_scroll = window.scrollY;

  if (window.scrollY > 20) {
    navbar.classList.add("nav__stick");
    //console.log(window.scrollY)
    //=> jak daleko je od vršku
  } else {
    navbar.classList.remove("nav__stick");
  }
});
