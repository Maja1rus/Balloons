
export function handleModal(modal) {
  const closeModal = document.querySelector('.modal__close')

  function handleClose() {
    modal.classList.remove('modal_open')
    window.removeEventListener('keydown', escapeHandler)
    modal.removeEventListener('click', modalOverlayHandler)
  }
  closeModal.addEventListener('click', handleClose)

  function escapeHandler(e) {
    if (e.key === "Escape") {
      handleClose()
    }
  }
  function modalOverlayHandler(e) {
        if (e.target.classList.contains('modal') === true) {
            handleClose()
        }
  }
  modal.addEventListener('click', modalOverlayHandler)
  window.addEventListener('keydown', escapeHandler)
}