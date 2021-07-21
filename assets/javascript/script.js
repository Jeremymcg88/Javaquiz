var startButton = document.getElementById('start-btn');
startButton.addEventListener('click', setTime);

function setTime() {
    
    var timeleft = 60;
var timerInterval = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "Finished";
  } else {
    document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
    
};
