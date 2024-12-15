function toogleSearch() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';
}

function toogleClose() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

function toogleShow(){
  const overlay = document.getElementById('carrinho');
  overlay.style.display = 'block';
}

function toogleCloseCarrinho(){
  const overlay = document.getElementById('carrinho')
  overlay.style.display = 'none';
}

function showPopup() {
  document.getElementById("userPopup").style.display = "block";
}

function hidePopup() {
  document.getElementById("userPopup").style.display = "none";
}

function checkPopupLeave() {
  const popup = document.getElementById("userPopup");
  const isMouseOverPopup = document.querySelector("#userPopup:hover") !== null;
  
  if (!isMouseOverPopup) {
    hidePopup();
  }
}