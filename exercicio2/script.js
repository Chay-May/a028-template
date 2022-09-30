

const escondeSenha = () => {
    const input = document.getElementById('password')

    input.setAttribute('type', 'password')
}

const selectForm = document.getElementsByTagName('form')
console.log(selectForm[0])

selectForm[0].setAttribute('class', 'dark')

