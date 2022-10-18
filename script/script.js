const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight-70) {
    navbar.classList.remove("bg-light");
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-gradient");
  } else {
    navbar.classList.remove("bg-gradient");
    navbar.classList.add("bg-transparent");
    navbar.classList.add("bg-light");
  }
});
