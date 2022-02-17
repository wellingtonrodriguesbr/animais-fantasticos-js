import outSideClick from "./outSideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ['click', 'touchstart'];

  if (menuButton) {
    function openMenu(e) {
      menuList.classList.toggle('ativo');
      menuButton.classList.toggle('ativo');
      
      outSideClick(menuList, events, () => {
        menuList.classList.remove('ativo');
        menuButton.classList.remove('ativo');
      });
    }
  
    events.forEach((event) => {
      menuButton.addEventListener(event, openMenu);
    });
  }
  
}


