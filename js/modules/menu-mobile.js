import outSideClick from "./outSideClick.js";

export default function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click"];

  if (menuButton) {
    function openMenu(e) {
      menuList.classList.add("ativo");
      menuButton.classList.add("ativo");

      outSideClick(menuList, events, () => {
        menuList.classList.remove("ativo");
        menuButton.classList.remove("ativo");
      });
    }

    events.forEach((event) => {
      menuButton.addEventListener(event, openMenu);
    });
  }
}
