// Buy (giỏ hàng)
const Buy = document.querySelector('.js-buy')
       
function thongbaologin()
{
  window.alert("ĐĂNG NHẬP ĐỂ ORDER SẢN PHẨM");
}
Buy.addEventListener('click', thongbaologin)

// Modal login
const loGinnow = document.querySelector('.js-login-now')
const loGin = document.querySelector('.js-login')
const modalLogin = document.querySelector('.js-modal-login')
const modalCloselogin = document.querySelector('.js-modal-login-close')
const modalLogincontainer = document.querySelector('.js-modal-login-container')
function showLogin() {
    modalLogin.classList.add('open')
}
function hideLogin() {
    modalLogin.classList.remove('open')
}
loGinnow.addEventListener('click', showRegister)
loGinnow.addEventListener('click', hideLogin)
loGin.addEventListener('click', showLogin)
modalCloselogin.addEventListener('click', hideLogin)
modalLogin.addEventListener('click', hideLogin)
modalLogincontainer.addEventListener('click', function(event) {
    event.stopPropagation()
})
// Modal register
const registerNow = document.querySelector('.js-register-now')
const regiSter = document.querySelector('.js-register')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showRegister() {
    modal.classList.add('open')
}


function hideRegister() {
    modal.classList.remove('open')
}
registerNow.addEventListener('click', showLogin)
registerNow.addEventListener('click', hideRegister)
regiSter.addEventListener('click', showRegister)
modalClose.addEventListener('click', hideRegister)
modal.addEventListener('click', hideRegister)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})