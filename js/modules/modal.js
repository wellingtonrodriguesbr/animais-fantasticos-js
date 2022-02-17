const btnAbrir = document.querySelector('[data-modal="abrir"]');
const btnFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');

if (btnAbrir && btnFechar && containerModal) {
  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function fecharAocliqueForaModal(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }

  btnAbrir.addEventListener("click", toggleModal);
  btnFechar.addEventListener("click", toggleModal);
  containerModal.addEventListener("click", fecharAocliqueForaModal);
}
