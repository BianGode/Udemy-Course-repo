const downBtn = document.querySelectorAll('.faq-toggle')

downBtn.forEach((el) => {
  el.addEventListener('click',() => {
    el.parentNode.classList.toggle('active')
  })
})