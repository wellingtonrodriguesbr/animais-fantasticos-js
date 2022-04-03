export default class Modal {
  constructor(open, close, container) {
    this.open = document.querySelector(open);
    this.close = document.querySelector(close);
    this.containerModal = document.querySelector(container);
  }

  toggleModal(e) {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  fecharAocliqueForaModal(e) {
    if (e.target === this.containerModal) {
      this.toggleModal(e);
    }
  }

  addModalEvent() {
    this.open.addEventListener("click", this.eventToggleModal.bind(this));
    this.close.addEventListener("click", this.eventToggleModal.bind(this));
    this.containerModal.addEventListener(
      "click",
      this.fecharAocliqueForaModal.bind(this)
    );
  }

  init() {
    if (this.open && this.close && this.containerModal) {
      this.addModalEvent();
    }

    return this;
  }
}
