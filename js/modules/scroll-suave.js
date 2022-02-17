const links = document.querySelectorAll('.js-menu a[href⁼"#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  window.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

links.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
