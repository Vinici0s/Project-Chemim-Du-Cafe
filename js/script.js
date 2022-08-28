// Button (back to top)
backButton = document.getElementById("backTop");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
}

function backTopFunction() {
//   document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}