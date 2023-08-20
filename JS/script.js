let timVine = document.getElementById("tim-vine");
let navbar = document.getElementById("main-nav");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
    let scrollPos = window.scrollY;
    if (scrollPos > navPos) {
        navbar.classList.add('sticky');
        header.classList.add('navbarOffsetMargin');
    } else {
        navbar.classList.remove('sticky');
        header.classList.remove('navbarOffsetMargin');
    }
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}