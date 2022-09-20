const form = document.querySelector('.form-add-todo')
const container = document.querySelector('.todos-container')
const alerta = document.querySelector('.alert-danger')
const alertSuccess = document.querySelector('.alert-success')

/* Função Error */
const funcError = () => {
    alerta.classList.remove('d-none')
    setTimeout(() => {
        alerta.classList.add('d-none')
    }, 3000);
}

/* Função Success */
const funcSuccess = () => {
    alertSuccess.classList.remove('d-none')
    setTimeout(() => {
        alertSuccess.classList.add('d-none')
    }, 3000);
    form.reset()
}

form.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()
    if (inputValue.length === 0) {
        funcError()
    } else {
        funcSuccess()
        container.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
        `
    }
    console.log(inputValue)
})

