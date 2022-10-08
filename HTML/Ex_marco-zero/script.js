const nav = document.querySelector('.nav')

const navScroll = () => {
  window.scrollY > nav.offsetHeight + 150
    ? nav.classList.add('active')
    : nav.classList.remove('active')
}

window.addEventListener('scroll', navScroll)
