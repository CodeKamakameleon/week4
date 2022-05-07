const modalBtn = document.querySelector("#contactBtn");
const modal = document.querySelector(".modal");
const modalCloseBtn = modal.querySelector(".modal__close-btn");
// select overlay

function openModal() {
  modal.classList.add("modal_is_open");
}

function closeModal() {
  modal.classList.remove("modal_is_open");
}

function handleEsc(evt) {
  if (true /*check if the esc was pushed here*/) {
    closeModal();
  }
}

modalBtn.addEventListener("click", openModal, false);
modalCloseBtn.addEventListener("click", closeModal, false);
// handle clicking overlay
