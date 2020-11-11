const themeLink = document.getElementById("theme-style");
let themeDots = document.getElementsByClassName("theme-dot");

let theme = localStorage.getItem("theme") || "light";
setTheme(theme);

for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", function (event) {
    let mode = event.target.dataset.mode;
    setTheme(mode);
    localStorage.setItem("theme", mode);
  });
}
function setTheme(mode) {
  switch (mode) {
    case "blue":
      themeLink.href = "blue.css";
      break;
    case "green":
      themeLink.href = "green.css";
      break;
    case "purple":
      themeLink.href = "purple.css";
      break;

    default:
      themeLink.href = "default.css";
      break;
  }
}
