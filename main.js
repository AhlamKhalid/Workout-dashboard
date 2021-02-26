// variables
const sideNavWidth = "200px";

// elements
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const sideNav = document.querySelector("#side-nav");
const body = document.querySelector("body");
const sunIcons = document.querySelectorAll(".sun-outline");
const moonIcons = document.querySelectorAll(".moon-outline");

// event listeners

/* open side nav */
openMenu.addEventListener("click", () => {
  sideNav.style.right = "0";
  body.style.left = `-${sideNavWidth}`;
});

/* close side nav */
closeMenu.addEventListener("click", () => {
  sideNav.style.right = `-${sideNavWidth}`;
  body.style.left = "0";
});

// theme toggler: outlined sun
for (const sun of sunIcons) {
  sun.addEventListener("click", () => {
    body.classList.remove("dark");
  });
}

// theme toggler: outlined moon
for (const moon of moonIcons) {
  moon.addEventListener("click", () => {
    body.classList.add("dark");
  });
}
