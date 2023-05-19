//Modelo:https://www.elcontribuyente.mx/calculadora/isr/
//Tabla Tarifa 2023: https://idconline.mx/fiscal-contable/2023/01/02/tarifa-mensual-de-isr-2023
//Ver Platzi 23 y 24
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

    if(deduccionesDelMes > limitesInferiores[0] && deduccionesDelMes < limitesSuperiores[0]){
        const limiteInferior = limitesInferiores[0];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[0] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[0];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[0];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[0].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    else if(deduccionesDelMes > limitesInferiores[1] && deduccionesDelMes < limitesSuperiores[1]){
        const limiteInferior = limitesInferiores[1];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[1] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[1];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[1];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[1].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    


    ingreso.innerHTML = "$ " + ingresoGravable.toFixed(2);
    deduccionMesP.innerHTML = "$ " + deduccionesDelMes.toFixed(2);
    event.preventDefault(); 
}