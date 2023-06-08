const body = document.querySelector("body")
const popups_all = document.querySelector("popup")

// Все кнопки модальных окон
const pop1_btn = document.getElementById("pop1_btn")
const pop2_btn = document.getElementById("pop2_btn")
const pop3_btn = document.getElementById("pop3_btn")

// Получаем все модальные окна
const pop1 = document.getElementById("pop1")
const pop2 = document.getElementById("pop2")
const pop3 = document.getElementById("pop3")


// Получаем список закрытия кнопок
const close_popup_1 = document.getElementById("close_popup_btn_1")
const close_popup_2 = document.getElementById("close_popup_btn_2")
const close_popup_3 = document.getElementById("close_popup_btn_3")


// Открываем popup окна по номеру
pop1_btn.addEventListener('click', () => { pop1.classList.add('show-popup'), body.classList.add('scr-n') })
pop2_btn.addEventListener('click', () => { pop2.classList.add('show-popup'), body.classList.add('scr-n') })
pop3_btn.addEventListener('click', () => { pop3.classList.add('show-popup'), body.classList.add('scr-n') })


// Закрываем все popup окна
close_popup_1.addEventListener('click', () => { body.classList.remove('scr-n'), pop1.classList.remove('show-popup') })
close_popup_2.addEventListener('click', () => { body.classList.remove('scr-n'), pop2.classList.remove('show-popup') })
close_popup_3.addEventListener('click', () => { body.classList.remove('scr-n'), pop3.classList.remove('show-popup') })
