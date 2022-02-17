import outSideClick from "./outSideClick.js";

export default function initDropDownMenu() {
  const dropDownMenu = document.querySelectorAll('[data-dropdown]');

  dropDownMenu.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.toggle('ativo');

    outSideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }
}

