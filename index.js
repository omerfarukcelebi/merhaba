const okey = document.getElementById("okey");
const olmaz = document.getElementById("olmaz");
const belki = document.getElementById("belki");

let scale = 1;

function growOkey() {
  if (scale < 30) {
    scale += 1;
    okey.style.transform = `translate(-50%, -50%) scale(${scale})`;

    if (scale >= 30) {
      okey.innerText = "TEBRİKLER!";
      okey.style.color = "#fff";
      okey.style.fontSize = "3rem";
    }
  }
}

olmaz.addEventListener("click", growOkey);
belki.addEventListener("click", growOkey);
