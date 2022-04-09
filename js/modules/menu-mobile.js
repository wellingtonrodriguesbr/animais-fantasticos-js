import outSideClick from "./outSideClick.js";

export default class MenuMobile {
  constructor(menuList, menuButton, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "ativo";
    this.openMenu = this.openMenu.bind(this);
    this.events = events;

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
  }

  openMenu() {
    outSideClick(this.menuList, this.events, () => {
      this.menuList.classList.toggle(this.activeClass);
      this.menuButton.classList.toggle(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }

    return this;
  }
}
