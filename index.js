const audio = document.getElementById("audio");

/* Ez elindítja a zenét */
function start() {
  alert("start");
  audio.play();
}

/* Ez megállítja a zenét */
function stop() {
  alert("stop");
  audio.pause();
}
