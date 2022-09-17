const form = document.querySelector('.form-add-todo')
const ul = document.querySelector('.todos-container')
const alerta = document.querySelector('.alerta')

form.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

    if (inputValue.length != 0) {
        ul.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>    
      `

    } else {
        alerta.classList.remove('d-none')
        setTimeout(sumirAlerta, 2000)
    }
    function sumirAlerta() {
        alerta.classList.add('d-none')
    }


    event.target.reset()


})