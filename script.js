const hamburgerMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("navbar");
// navBar.style.display = "none";

window.addEventListener("resize", () => {
  if (window.innerWidth >= 576) {
    console.log("Here!!");
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    header.style.backgroundColor = "rgba(232, 246, 233, 0.4)";
    header.style.backdropFilter = "blur(10px)";
    header.style.boxShadow = "1px 1px rgba(0, 0, 0, 0.10)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "unset";
  }
});

hamburgerMenu.addEventListener("click", () => {
  console.log("HAMBURGER MENU CLICKED!");

  console.log("display: ", navBar.style.display);

  if (navBar.style.display === "none" || !navBar.style.display) {
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
});

const closeIcon = document.getElementById("close-icon");

closeIcon.addEventListener("click", () => {
  const navBarDisplay = navBar.style.display;

  if (navBarDisplay === "none") {
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
});
