// Button (back to top)
backButton = document.getElementById("backTop");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
}

function backTopFunction() {

  currentYOffset = self.pageYOffset;
  initYOffset = currentYOffset;

  var intervalId = setInterval(function(){
  currentYOffset -= initYOffset*0.04; 
  document.body.scrollTop = currentYOffset ;
  document.documentElement.scrollTop = currentYOffset;

    if(self.pageYOffset === 0){
      clearInterval(intervalId);
    }
  }, 20);
  
}

/*    Prevent Default    */

document.addEventListener('click', function(event){
  const element = event.preventDefault();
});