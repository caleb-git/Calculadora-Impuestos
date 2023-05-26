//Modelo:https://www.elcontribuyente.mx/calculadora/isr/
//Tabla Tarifa 2023: https://idconline.mx/fiscal-contable/2023/01/02/tarifa-mensual-de-isr-2023
//Ver Platzi 23 y 24
const cantidad = document.querySelector('#cantidad');
const ingreso = document.querySelector('#ingreso');
const botonCalcular = document.querySelector('#btn-calcular');
const botonCalcularLocal = document.querySelector('#btn-calcularLocal');
const divCalculando = document.querySelector('#div-calculandoID');

const menuMobile = document.querySelector('#containerMenuMobile');
const iconoCerrarMobile = document.querySelector('#iconoCerrarMenuMobile');

const iconoMenuMobileImg = document.querySelector('#menuMobileimg');

const deduccionMesP = document.querySelector('#deduccionMes');
const menosLimiteInferior = document.querySelector('#menosLimiteInferior');
const porcentajeTarifaP = document.querySelector('#porcentajeTarifa');
const impuestoMarginalP = document.querySelector('#impuestoMarginal');
const cuotaFijaTarifaP = document.querySelector('#cuotaFijaTarifa');
const  pagarISRP= document.querySelector('#pagarISR');
const  ivaLocalP= document.querySelector('#pagarIvaLocalP');
const  impuestosTotalLocalP= document.querySelector('#impuestosTotalLocalP');

//Al hacer clic en Casas y Departamentos//
botonCalcular.addEventListener('click', calcularOnClick);
botonCalcular.addEventListener('click', toggleDivCalculando);
iconoCerrarMobile.addEventListener('click', toggleMenuMobile);
iconoMenuMobileImg.addEventListener('click', abrirMenuMobile);



//Calcular Arrendamiento Casas y Departamentos//
function calcularOnClick(){
    const ingresoGravable = (Number(cantidad.value));
    const deduccionCiega = (Number(cantidad.value)) * 0.35;
    const deduccionesDelMes = ingresoGravable - deduccionCiega;
    

    if(deduccionesDelMes > limitesInferiores[0] && deduccionesDelMes < limitesSuperiores[0]){
        const limiteInferior = limitesInferiores[0];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[0] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[0];

        
        menosLimiteInferior.innerHTML = numberFormatter.format(ingresoExcedente);
        porcentajeTarifaP.innerHTML = porcentajes[0] + "%";
        impuestoMarginalP.innerHTML = numberFormatter.format(impuestoMarginal);
        cuotaFijaTarifaP.innerHTML = numberFormatter.format(cuotasFijas[0]);
        pagarISRP.innerHTML = numberFormatter.format(impuestoISR);

        
    }

    else if(deduccionesDelMes > limitesInferiores[1] && deduccionesDelMes < limitesSuperiores[1]){
        const limiteInferior = limitesInferiores[1];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[1] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[1];

        menosLimiteInferior.innerHTML = numberFormatter.format(ingresoExcedente);
        porcentajeTarifaP.innerHTML = porcentajes[1] + "%";
        impuestoMarginalP.innerHTML = numberFormatter.format(impuestoMarginal);
        cuotaFijaTarifaP.innerHTML = numberFormatter.format(cuotasFijas[1]);
        pagarISRP.innerHTML = numberFormatter.format(impuestoISR);
        
    }

    else if(deduccionesDelMes > limitesInferiores[2] && deduccionesDelMes < limitesSuperiores[2]){
        const limiteInferior = limitesInferiores[2];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[2] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[2];

        menosLimiteInferior.innerHTML = numberFormatter.format(ingresoExcedente);
        porcentajeTarifaP.innerHTML = porcentajes[2] + "%";
        impuestoMarginalP.innerHTML = numberFormatter.format(impuestoMarginal);
        cuotaFijaTarifaP.innerHTML = numberFormatter.format(cuotasFijas[2]);
        pagarISRP.innerHTML = numberFormatter.format(impuestoISR);
        
    }

    else if(deduccionesDelMes > limitesInferiores[3] && deduccionesDelMes < limitesSuperiores[3]){
        const limiteInferior = limitesInferiores[3];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[3] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[3];

        menosLimiteInferior.innerHTML = numberFormatter.format(ingresoExcedente);
        porcentajeTarifaP.innerHTML = porcentajes[3] + "%";
        impuestoMarginalP.innerHTML = numberFormatter.format(impuestoMarginal);
        cuotaFijaTarifaP.innerHTML = numberFormatter.format(cuotasFijas[3]);
        pagarISRP.innerHTML = numberFormatter.format(impuestoISR);
        
    }

    else if(deduccionesDelMes > limitesInferiores[4] && deduccionesDelMes < limitesSuperiores[4]){
        const limiteInferior = limitesInferiores[4];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[4] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[4];

        menosLimiteInferior.innerHTML = numberFormatter.format(ingresoExcedente);
        porcentajeTarifaP.innerHTML = porcentajes[4] + "%";
        impuestoMarginalP.innerHTML = numberFormatter.format(impuestoMarginal);
        cuotaFijaTarifaP.innerHTML = numberFormatter.format(cuotasFijas[4]);
        pagarISRP.innerHTML = numberFormatter.format(impuestoISR);
        
    }

    else if(deduccionesDelMes > limitesInferiores[5] && deduccionesDelMes < limitesSuperiores[5]){
        const limiteInferior = limitesInferiores[5];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[5] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[5];

        menosLimiteInferior.innerHTML = numberFormatter.format(ingresoExcedente);
        porcentajeTarifaP.innerHTML = porcentajes[5] + "%";
        impuestoMarginalP.innerHTML = numberFormatter.format(impuestoMarginal);
        cuotaFijaTarifaP.innerHTML = numberFormatter.format(cuotasFijas[5]);
        pagarISRP.innerHTML = numberFormatter.format(impuestoISR);
        
    }

    else if(deduccionesDelMes > limitesInferiores[6] && deduccionesDelMes < limitesSuperiores[6]){
        const limiteInferior = limitesInferiores[6];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[6] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[6];

        menosLimiteInferior.innerHTML = numberFormatter.format(ingresoExcedente);
        porcentajeTarifaP.innerHTML = porcentajes[6] + "%";
        impuestoMarginalP.innerHTML = numberFormatter.format(impuestoMarginal);
        cuotaFijaTarifaP.innerHTML = numberFormatter.format(cuotasFijas[6]);
        pagarISRP.innerHTML = numberFormatter.format(impuestoISR);
        
    }

    else if(deduccionesDelMes > limitesInferiores[7] && deduccionesDelMes < limitesSuperiores[7]){
        const limiteInferior = limitesInferiores[7];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[7] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[7];

        menosLimiteInferior.innerHTML = numberFormatter.format(ingresoExcedente);
        porcentajeTarifaP.innerHTML = porcentajes[7] + "%";
        impuestoMarginalP.innerHTML = numberFormatter.format(impuestoMarginal);
        cuotaFijaTarifaP.innerHTML = numberFormatter.format(cuotasFijas[7]);
        pagarISRP.innerHTML = numberFormatter.format(impuestoISR);
        
    }

    else if(deduccionesDelMes > limitesInferiores[8] && deduccionesDelMes < limitesSuperiores[8]){
        const limiteInferior = limitesInferiores[8];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[8] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[8];

        menosLimiteInferior.innerHTML = numberFormatter.format(ingresoExcedente);
        porcentajeTarifaP.innerHTML = porcentajes[8] + "%";
        impuestoMarginalP.innerHTML = numberFormatter.format(impuestoMarginal);
        cuotaFijaTarifaP.innerHTML = numberFormatter.format(cuotasFijas[8]);
        pagarISRP.innerHTML = numberFormatter.format(impuestoISR);
        
    }

    else if(deduccionesDelMes > limitesInferiores[9] && deduccionesDelMes < limitesSuperiores[9]){
        const limiteInferior = limitesInferiores[9];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[9] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[9];

        menosLimiteInferior.innerHTML = numberFormatter.format(ingresoExcedente);
        porcentajeTarifaP.innerHTML = porcentajes[9] + "%";
        impuestoMarginalP.innerHTML = numberFormatter.format(impuestoMarginal);
        cuotaFijaTarifaP.innerHTML = numberFormatter.format(cuotasFijas[9]);
        pagarISRP.innerHTML = numberFormatter.format(impuestoISR);
        
    }

    else if(deduccionesDelMes > limitesInferiores[10] && deduccionesDelMes < limitesSuperiores[10]){
        const limiteInferior = limitesInferiores[10];
        const ingresoExcedente = deduccionesDelMes - limiteInferior;
        const impuestoMarginal = ingresoExcedente * (porcentajes[10] / 100);
        
        const impuestoISR = impuestoMarginal + cuotasFijas[10];

        menosLimiteInferior.innerHTML = numberFormatter.format(ingresoExcedente);
        porcentajeTarifaP.innerHTML = porcentajes[10] + "%";
        impuestoMarginalP.innerHTML = numberFormatter.format(impuestoMarginal);
        cuotaFijaTarifaP.innerHTML = numberFormatter.format(cuotasFijas[10]);
        pagarISRP.innerHTML = numberFormatter.format(impuestoISR);
        
    }

   
    


    ingreso.innerHTML = numberFormatter.format(ingresoGravable);
    deduccionMesP.innerHTML = numberFormatter.format(deduccionesDelMes);
    event.preventDefault(); 
}


function toggleDivCalculando(){
    const estaOcultoDiv = divCalculando.classList.contains('inactive');

    if(estaOcultoDiv){
        divCalculando.classList.remove('inactive');
    }
}

function toggleMenuMobile(){
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');

    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
    }
    console.log('Click');
   

   
}

function abrirMenuMobile(){
    const isMobileMenuOpen = menuMobile.classList.contains('inactive');

    if(isMobileMenuOpen){
        menuMobile.classList.remove('inactive');
    }
    console.log('Click');
   

   
}




