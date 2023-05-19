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

    else if(deduccionesDelMes > limitesInferiores[2] && deduccionesDelMes < limitesSuperiores[2]){
        const limiteInferior = limitesInferiores[2];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[2] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[2];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[2];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[2].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    else if(deduccionesDelMes > limitesInferiores[3] && deduccionesDelMes < limitesSuperiores[3]){
        const limiteInferior = limitesInferiores[3];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[3] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[3];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[3];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[3].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    else if(deduccionesDelMes > limitesInferiores[4] && deduccionesDelMes < limitesSuperiores[4]){
        const limiteInferior = limitesInferiores[4];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[4] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[4];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[4];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[4].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    else if(deduccionesDelMes > limitesInferiores[5] && deduccionesDelMes < limitesSuperiores[5]){
        const limiteInferior = limitesInferiores[5];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[5] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[5];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[5];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[5].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    else if(deduccionesDelMes > limitesInferiores[6] && deduccionesDelMes < limitesSuperiores[6]){
        const limiteInferior = limitesInferiores[6];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[6] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[6];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[6];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[6].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    else if(deduccionesDelMes > limitesInferiores[7] && deduccionesDelMes < limitesSuperiores[7]){
        const limiteInferior = limitesInferiores[7];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[7] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[7];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[7];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[7].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    else if(deduccionesDelMes > limitesInferiores[8] && deduccionesDelMes < limitesSuperiores[8]){
        const limiteInferior = limitesInferiores[8];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[8] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[8];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[8];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[8].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    else if(deduccionesDelMes > limitesInferiores[9] && deduccionesDelMes < limitesSuperiores[9]){
        const limiteInferior = limitesInferiores[9];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[9] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[9];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[9];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[9].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    else if(deduccionesDelMes > limitesInferiores[10] && deduccionesDelMes < limitesSuperiores[10]){
        const limiteInferior = limitesInferiores[10];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[10] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[10];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[10];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[10].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    else if(deduccionesDelMes > limitesInferiores[11] && deduccionesDelMes < limitesSuperiores[11]){
        const limiteInferior = limitesInferiores[11];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[11] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[11];

        menosLimiteInferior.innerHTML = "$ " + ingresoExcedente.toFixed(2);
        porcentajeTarifaP.innerHTML = "% " + porcentajes[11];
        impuestoMarginalP.innerHTML = "$ " + impuestoMarginal.toFixed(2);
        cuotaFijaTarifaP.innerHTML = "$ " + cuotasFijas[11].toFixed(2);
        pagarISRP.innerHTML = "$ " + impuestoISR.toFixed(2);

        
    }

    


    ingreso.innerHTML = "$ " + ingresoGravable.toFixed(2);
    deduccionMesP.innerHTML = "$ " + deduccionesDelMes.toFixed(2);
    event.preventDefault(); 
}