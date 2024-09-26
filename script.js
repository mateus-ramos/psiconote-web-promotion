const hamburgerMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("navbar");
// navBar.style.display = "none";

let isNavBarOpen = false;
let isScrolling = true;

function openNavBar() {
  navBar.classList.add("open");
  isNavBarOpen = true;
}

function closeNavBar() {
  navBar.classList.remove("open");
  isNavBarOpen = false;
}

hamburgerMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!isNavBarOpen) {
    openNavBar();
  }
});

document.addEventListener("click", (event) => {
  if (isNavBarOpen && !isScrolling) {
    const isClickInsideNavBar = navBar.contains(event.target);
    const isClickOnOpenButton = hamburgerMenu.contains(event.target);

    if (!isClickInsideNavBar && !isClickOnOpenButton) {
      closeNavBar();
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 576) {
    console.log("Here!!");
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  isScrolling = true;

  clearTimeout(scrollTimeout);
  if (window.scrollY !== 0) {
    header.style.backgroundColor = "rgba(232, 246, 233, 0.4)";
    header.style.backdropFilter = "blur(10px)";
    header.style.boxShadow = "1px 1px rgba(0, 0, 0, 0.10)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "unset";
  }

  scrollTimeout = setTimeout(() => {
    isScrolling = false;
  }, 100);
});

// hamburgerMenu.addEventListener("click", () => {
//   console.log("HAMBURGER MENU CLICKED!");

//   console.log("display: ", navBar.style.display);

//   if (navBar.style.display === "none" || !navBar.style.display) {
//     navBar.style.display = "block";
//   } else {
//     navBar.style.display = "none";
//   }
// });

const closeIcon = document.getElementById("close-icon");

closeIcon.addEventListener("click", (event) => {
  event.stopPropagation();
  closeNavBar();
});
