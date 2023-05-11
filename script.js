//Modelo:https://www.elcontribuyente.mx/calculadora/isr/

const cantidad = document.querySelector('#cantidad');
const ingreso = document.querySelector('#ingreso');
const botonCalcular = document.querySelector('#btn-calcular');

botonCalcular.addEventListener('click', calcularOnClick);

function calcularOnClick(){
    const multiplicacion = (Number(cantidad.value)) * 2;
    ingreso.innerHTML = multiplicacion; //No salio el resultado visto
}