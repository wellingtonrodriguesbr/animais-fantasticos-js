const btnTop = document.querySelector(".topo");

export default function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  btnTop.addEventListener("click", scrollToTop);
}
