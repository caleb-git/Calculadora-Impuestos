//Modelo:https://www.elcontribuyente.mx/calculadora/isr/
//Tabla Tarifa 2023: https://idconline.mx/fiscal-contable/2023/01/02/tarifa-mensual-de-isr-2023

const cantidad = document.querySelector('#cantidad');
const ingreso = document.querySelector('#ingreso');
const botonCalcular = document.querySelector('#btn-calcular');

const deduccionMesP = document.querySelector('#deduccionMes');
const menosLimiteInferior = document.querySelector('#menosLimiteInferior');
const porcentajeTarifaP = document.querySelector('#porcentajeTarifa');
const impuestoMarginalP = document.querySelector('#impuestoMarginal');
const cuotaFijaTarifaP = document.querySelector('#cuotaFijaTarifa');
const  pagarISRP= document.querySelector('#pagarISR');

botonCalcular.addEventListener('click', calcularOnClick);

function calcularOnClick(){
    const ingresoGravable = (Number(cantidad.value));
    const deduccionCiega = (Number(cantidad.value)) * 0.35;
    const deduccionesDelMes = ingresoGravable - deduccionCiega;

    if(deduccionesDelMes > 0 && deduccionesDelMes < 746.04){
        const ganaMenosDe746 = deduccionesDelMes - 0.01;
        const impuestoMarginal = ganaMenosDe746 * 0.0192;
        const cuotafija = 0;
        const impuestoISR = impuestoMarginal + cuotafija;//

        menosLimiteInferior.innerHTML = "$ " + ganaMenosDe746.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + 1.92;
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotafija.toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);//
    }
    ingreso.innerHTML = "$ " + ingresoGravable.toFixed(2);
    deduccionMesP.innerHTML = "$ " + deduccionesDelMes.toFixed(2);
    event.preventDefault(); 
}