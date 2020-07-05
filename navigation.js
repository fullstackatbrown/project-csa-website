function navSlide(){
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const burger = document.querySelector(".burger");

  nav.classList.toggle("nav-active");
  burger.classList.toggle("burger-response");

  navLinks.forEach((link, index) => {
    console.log(index);
    if(link.style.animation){
      link.style.animation = ``;
    } else {
      link.style.animation = `navLinkFade 0.75 ease-in-out forwards ${index/7 +1.15}s`;
    }
  });
}

function hover(element) {
  element.setAttribute('src', "images/csaLogoYellow.png");
}
function unhover(element) {
  element.setAttribute('src', "images/csaLogo.png");
}

function dropdownToggleScroll() {
  if (document.body.style.overflow == "hidden") {
      document.body.style.overflow = "auto";
  } else {
      document.body.style.overflow = "hidden";
  }
}

document.addEventListener("DOMContentLoaded", function(){
  $(".burger").click(navSlide)
})
