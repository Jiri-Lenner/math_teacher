//navbar => sticky
let last_scroll;

let navbar;

let prevScrollpos = window.scrollY;

//nav sticking to the top

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
    //nav hiding when scrolling
    let currentScrollPos = window.scrollY;

    if (currentScrollPos < 200) {
    } else if (prevScrollpos > currentScrollPos) {
        document.getElementById("navBar").style.top = "0";
    } else {
        document.getElementById("navBar").style.top = "-64px";
    }
    prevScrollpos = currentScrollPos;
});
