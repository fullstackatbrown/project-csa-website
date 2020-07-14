// toggles the nav links between visible and not visible
// adds the fade in animation for links
// toggles the burger between up arrow and down arrow when pointer hovers over it
function navSlide(){
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const burger = document.querySelector(".burger");
  const dropdownContainer = document.querySelector(".dropdownContainer");

  //translates the nav links and dropdown container between on and off screen
  nav.classList.toggle("nav-active");
  dropdownContainer.classList.toggle("dropdownContainer-active");

  //toggles between up and down arrow for burger
  burger.classList.toggle("burger-response");
  // setTimeout(delayIconChange = () => {burger.classList.toggle("burger-response");}, 50);

  //animates the links
  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = ``;
    } else {
      link.style.animation = `navLinkFade 0.75 ease-in-out forwards ${index/7 +1.15}s`;
    }
  });
}

//turns top left home button to turn yellow on hover
function hover(element) {
  element.setAttribute('src', "images/csaLogoYellow.png");
  const text = document.querySelector(".homeSection");
  text.style.color = "#FFE12B";
}

//turns top left home button to return to white or red depending on if
//nav menu is active or not

//only used for home page
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

//turns top left home buttom back to red for all pages except index
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

//toggles top left home button color between red and white
//red when the nav menu is activated and white when not
function changeColor() {
  const logo = document.getElementById('homeIcon');
  const text = document.querySelector(".homeSection");
  const burgerDivs = document.querySelectorAll("div.burger > div");

  if (logo.getAttribute('src')==="images/csaLogoWhite.png"){
    setTimeout(delayLogoChange = () => { logo.setAttribute('src', "images/csaLogo.png");}, 600);
    setTimeout(delayTextChange = () => { text.style.color = "#CF2127";}, 600);
    // logo.setAttribute('src', "images/csaLogo.png");
    // text.style.color = "#CF2127";

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


//gets rid of page behind the dropdown when nav is active on home page, fixes overflow
function displayLanding() {
  const homeContainer = document.querySelector(".homePageContainer");
  const welcomeStatement = document.querySelector(".welcomeStatement");
  if (homeContainer.style.display === "none") {
    homeContainer.style.display = "flex";
    welcomeStatement.style.display = "block";
  } else {
    setTimeout(delayHomePageChange = () => { homeContainer.style.display = "none";}, 600);
    setTimeout(delayWelcomeStatementChange = () => { welcomeStatement.style.display = "none";}, 600);
  }
}

//gets rid of page behind the dropdown when nav is active on membership, contact, events
function displayMajority(){
  const container = document.querySelector(".container");
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    setTimeout(delayPageChange = () => { container.style.display = "none";}, 600);
  }
}

//gets rid of page behind the dropdown when nav is active on thank you page, fixes overflow
function displayThankYou() {
  const thankYouContainer = document.querySelector(".thankYouContainer");
  if (thankYouContainer.style.display === "none") {
    thankYouContainer.style.display = "block";
  } else {
    setTimeout(delayThankYouChange = () => { thankYouContainer.style.display = "none";}, 600);
  }
}

//activates navSlide function when burger clicked
document.addEventListener("DOMContentLoaded", function(){
  $(".burger").click(navSlide)
  if(document.getElementById("home")) {
    $(".burger").click(displayLanding);
  }else if(document.getElementById("thankYou")){
    $(".burger").click(displayThankYou);
  } else {
    $(".burger").click(displayMajority);
  }
})

//activates changeColor when on landing page
document.addEventListener("DOMContentLoaded", function(){
  if(document.getElementById("home")) {
    $(".burger").click(changeColor)
  }
})
