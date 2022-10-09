export function promocode() {
  const promoBtn = document.querySelector('.promo__btn')
  const promoActive = document.querySelector('.promocode_active')
  const modalActive = document.querySelector('.modal__btn')

  promoBtn.addEventListener('click',() => {
    promoActive.setAttribute('style', "display: block")
  })
  modalActive.addEventListener('click', () => {
    promoActive.setAttribute('style', "display: block")
  })
}