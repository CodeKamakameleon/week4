const modalBtn = document.querySelector("#modalBtn");
const modal = document.querySelector(".modal");
const modalCloseBtn = modal.querySelector(".modal__close-btn");

function openModal() {
  modal.classList.add("modal_is_open");
}

function closeModal() {
  modal.classList.remove("modal_is_open");
}

modalBtn.addEventListener("click", openModal, false);
modalCloseBtn.addEventListener("click", closeModal, false);
