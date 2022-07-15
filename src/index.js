import "../css/style.scss";

window.moveTo(0, 0);
window.resizeTo(window.screen.width, window.screen.height);

function stopDefAction(evt) {
  evt.preventDefault();
}

document.getElementById("send").addEventListener("click", stopDefAction, false);
