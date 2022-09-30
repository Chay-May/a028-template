

const insereItem = (event) => {
    const ulElement = document.getElementById('lista')
    const newLi = document.createElement('li')
    const newItem = document.getElementById('meu-input')
    const textLi = document.createTextNode(newItem.value)
    newLi.appendChild(textLi)
    ulElement.insertAdjacentElement('beforeend', newLi)
}