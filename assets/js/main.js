console.log("app.js is connected!");
// Mobile nav
const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", function() {
  //console.log("click");
  const firstSpan = document.getElementById("first-span");
  const secondSpan = document.getElementById("second-span");
  const lastSpan = document.getElementById("last-span");
  const nav = document.getElementById("nav-bar");
  const navItems = document.getElementById("nav-bar__items");

  if (navItems.style.display != "block") {
    navItems.style.display = "block";
    navItems.style.marginTop = "0";
    firstSpan.style.transform = "rotate(45deg)";
    secondSpan.style.opacity = "0";
    lastSpan.style.transform = "rotate(-45deg)";
    lastSpan.style.marginRight = "3px";
  } else {
    navItems.style.display = "none";
    navItems.style.marginTop = "-100%";
    firstSpan.style.transform = "rotate(0deg)";
    secondSpan.style.opacity = "1";
    lastSpan.style.marginRight = "0";
    lastSpan.style.transform = "rotate(0deg)";
  }
});
// End mobile nav
