const navMenu = () => {
  // DOM manipulation
  const navToggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".links");

  // Event handling
  navToggle.addEventListener("click", () => {
    links.classList.toggle("show-links");
  });
};

export default navMenu;
