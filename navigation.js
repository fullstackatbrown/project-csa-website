function menuToggle(){
  let x = document.getElementById("dropdown-content");
 
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hover(element) {
  element.setAttribute('src', "images/csaLogoYellow.png");
}

function unhover(element) {
  element.setAttribute('src', "images/csaLogo.png");
}

function unhoverHomePage(element) {
  element.setAttribute('src', "images/csaLogoWhite.png");
}

function dropdownToggleScroll() {
  if (document.body.style.overflow == "hidden") {
      document.body.style.overflow = "auto";
  } else {
      document.body.style.overflow = "hidden";
  }
}

document.addEventListener("DOMContentLoaded", function(){
    $(".hamburger").click(menuToggle)
})
