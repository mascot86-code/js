import { product1 } from './product1.js';
import { product2 } from './product2.js';

// const bikes = product1
// const accessories = product2

// const products = [...bikes, ...accessories]

const users = [...document.querySelectorAll('#users li')]
const usersList = document.querySelector('#users')

const newUserList = users.map((user, index, array) => {

  if (index + 1 === array.length) {
    user.textContent += '.'
    user.classList.add('last')
  } else {
    user.textContent += ';'
  }
})

usersList.appendChild = `<li>${newUserList}</li>`


function renderTabs() {

  const tabs = document.querySelectorAll('#tab li')
  const tabContents = document.querySelectorAll('.tab-item')

  for (const [i, tab] of tabs.entries()) {
    tab.addEventListener('click', function () {

      changeTabContent(tabs)
      changeTabContent(tabContents)

    })

    function changeTabContent(array) {
      for (const elem of array) {
        elem.classList.remove('active')
      }
      array[i].classList.add('active')
    }
  }
}

renderTabs()


const form = document.querySelector('#form')
const inputName = form.name
const inputPhone = form.phone


form.addEventListener('submit', sendForm)

function sendForm(e) {
  e.preventDefault()

  const name = inputName.value.trim()
  const phone = inputPhone.value.trim()

  setInvalidStatus(name, inputName)
  setInvalidStatus(phone, inputPhone)

  function setInvalidStatus(value, input) {
    if (!value) {
      input.classList.add('invalid')
    } else {
      input.classList.remove('invalid')
    }
  }

  setTimeout(() => {
    form.querySelectorAll('input').forEach(input => {
      input.classList.remove('invalid')
    })
  }, 500)

}





