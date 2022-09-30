const ulElement = document.getElementById('lista') // CHAMOU O ELEMENTO

const newLi = document.createElement('li') //CRIOU A NOVA LISTA
console.log(newLi)

const liZero = document.createTextNode('Ítem 0') // CRIOU O TEXTO NOVO ELEMENTO
console.log(liZero)

newLi.appendChild(liZero) // ADICIONA O TEXTO AO ELEMENTO

ulElement.insertAdjacentElement('afterbegin', newLi) //ADICIONA O NOVO ELEMENTO À CLASSE

const newLiCinco = document.createElement('li')

const liCinco = document.createTextNode('Ítem 5')

newLiCinco.appendChild(liCinco)

ulElement.insertAdjacentElement('beforeend',)