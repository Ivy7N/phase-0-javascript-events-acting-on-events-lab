// Your code here
function moveDodgerLeft(){
    var currentPosition = parseFloat(dodger.style.left);
    if(currentPosition > 0){
        dodger.style.left = currentPosition - 10 + 'px';
    }
}
function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const left = parseInt(dodger.style.left);
    if (left < 360) {
      dodger.style.left = `${left + 1}px`; 
}
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
