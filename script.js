let menu = true;

window.onload = f => {
  document.getElementById("boton").addEventListener("click",fMenu);
}

function fMenu() {
  let side = document.getElementById("menu");

  if (menu) {
    menu = !menu;
    side.style.display = "none";
  } else {
    menu = !menu;
    side.style.display = "block";
  }
}
