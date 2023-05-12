//Modelo:https://www.elcontribuyente.mx/calculadora/isr/

const cantidad = document.querySelector('#cantidad');
const ingreso = document.querySelector('#ingreso');
const botonCalcular = document.querySelector('#btn-calcular');

botonCalcular.addEventListener('click', calcularOnClick);

function calcularOnClick(){
    const ingresoGravable = (Number(cantidad.value));
    ingreso.innerHTML = "$ " + ingresoGravable;
    event.preventDefault(); 
}