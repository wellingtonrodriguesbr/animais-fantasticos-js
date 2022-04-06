import outSideClick from "./outSideClick.js";

export default class DropDownMenu {
  constructor(dropDownMenu, events) {
    this.dropDownMenu = document.querySelectorAll(dropDownMenu);
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.activeClass = "ativo";
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
  }

  addDropDownMenuEvent() {
    this.dropDownMenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);

    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  init() {
    if (this.dropDownMenu.length) {
      this.addDropDownMenuEvent();
    }

    return this;
  }
}
