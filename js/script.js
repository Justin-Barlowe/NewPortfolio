// Dark Mode
const darkModeToggle = document.getElementById("darkModeToggle");
const themeText = document.getElementById("themeText");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeText.innerText = currentTheme === "dark" ? "Light Mode" : "Dark Mode"; // Update text based on stored theme.
}

darkModeToggle.addEventListener("click", function (event) {
  event.preventDefault();

  let theme = "light";
  if (document.documentElement.getAttribute("data-theme") === "light") {
    theme = "dark";
  }

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Toggle the text inside the <span>
  themeText.innerText = theme === "dark" ? "Light Mode" : "Dark Mode";
});

// Hamburger Menu
document.querySelector(".hamburger").addEventListener("click", function () {
  const menuItems = document.querySelector("nav .right");
  if (menuItems.style.display === "none" || menuItems.style.display === "") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }
});

