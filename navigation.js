function navSlide(){
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const burger = document.querySelector(".burger");
  const dropdownContainer = document.querySelector(".dropdownContainer");

  nav.classList.toggle("nav-active");
  burger.classList.toggle("burger-response");

  // Just toggles between showing the dropdown and not showing it
  if (dropdownContainer.style.display === "block") {
    dropdownContainer.style.display = "none";
  } else {
    dropdownContainer.style.display = "block";
  }
  
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

function unhoverNormal(element) {
  element.setAttribute('src', "images/csaLogo.png");
  document.querySelector(".homeSection").style.color = "#CF2127";
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
  const burgerDivs = document.querySelectorAll("div.burger > div");

  if (logo.getAttribute('src')==="images/csaLogoWhite.png"){
    /* setTimeout(delayLogoChange = () => { logo.setAttribute('src', "images/csaLogo.png");}, 600);
    setTimeout(delayTextChange = () => { text.style.color = "#CF2127";}, 600); */
    logo.setAttribute('src', "images/csaLogo.png");
    text.style.color = "#CF2127";

    // Changes each burger line to red when opening
    burgerDivs.forEach((line) => {
      line.style.backgroundColor = "#CF2127";
    })
  } else {
    logo.setAttribute('src', "images/csaLogoWhite.png");
    text.style.color = "white";
    
    // Changes each burger line back to white when exiting
    burgerDivs.forEach((line) => {
      line.style.backgroundColor = "white";
    })
  }
}

document.addEventListener("DOMContentLoaded", function(){
  $(".burger").click(navSlide)
})

document.addEventListener("DOMContentLoaded", function(){
  if(document.getElementById("home")) {
    $(".burger").click(changeColor)
  } 
})