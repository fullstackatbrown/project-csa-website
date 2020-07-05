function navSlide(){
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const burger = document.querySelector(".burger");

  nav.classList.toggle("nav-active");
  burger.classList.toggle("burger-response");

  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = ``;
    } else {
      link.style.animation = `navLinkFade 0.75 ease-in-out forwards ${index/7 +1.15}s`;
    }
  });
}

function hover(element) {
  element.setAttribute('src', "images/csaLogoYellow.png");
  const text = document.querySelector(".homeSection");
  text.style.color = "#FFE12B";
}

function unhoverHomePage(element) {
  const nav = document.querySelector(".nav-links");
  const text = document.querySelector(".homeSection");
  if (nav.classList.contains('nav-active')){
    element.setAttribute('src', "images/csaLogo.png");
    text.style.color = "#CF2127";
  } else {
    element.setAttribute('src', "images/csaLogoWhite.png");
    text.style.color = "white";
  }
}

function dropdownToggleScroll() {
  if (document.body.style.overflow == "hidden") {
      document.body.style.overflow = "auto";
  } else {
      document.body.style.overflow = "hidden";
  }
}

function changeColor() {
  const logo = document.getElementById('homeIcon');
  const text = document.querySelector(".homeSection");

  if (logo.getAttribute('src')==="images/csaLogoWhite.png"){
    logo.setAttribute('src', "images/csaLogo.png");
    text.style.color = "#CF2127";
  } else {
    logo.setAttribute('src', "images/csaLogoWhite.png");
    text.style.color = "white";
  }
}

document.addEventListener("DOMContentLoaded", function(){
  $(".burger").click(navSlide)
})

document.addEventListener("DOMContentLoaded", function(){
  $(".burger").click(changeColor)
})
