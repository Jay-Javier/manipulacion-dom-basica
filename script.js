const titulo = document.querySelector('title')
const formulario = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const boton = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#resultado')

formulario.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) { 
    console.log(event)
    event.preventDefault()
    const suma = input1.value + input2.value 
    pResult.innerHTML = "El Resultado es: " + suma

}
