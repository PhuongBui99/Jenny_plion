$(document).ready(function () {
    
  $('#autoplay').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500
  });

})

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("#header");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 20) {
    navbar.classList.add("fixed-top")
  } else {
    navbar.classList.remove("fixed-top");
  }
}

const content= header.querySelector("#navbarContent");
const ul = content.querySelector(".navbar-nav");
const li = ul.querySelectorAll(".navbar-item");
li.forEach(element => {
  element.addEventListener("click",myFunction => {
    const navlink = element.querySelector(".nav-link");
    var elmnt = document.getElementById(navlink.getAttribute("data-link"));
 console.log(elmnt);
 elmnt.scrollIntoView({behavior: "smooth",block: "start"});
 });
});



 
