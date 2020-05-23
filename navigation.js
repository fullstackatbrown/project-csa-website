function menuToggle(){
  let x = document.getElementById("dropdown-content");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


document.addEventListener("DOMContentLoaded", function(){
    $(".hamburger").click(menuToggle)
})
