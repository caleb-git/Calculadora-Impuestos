

function encontrarTarifa(limiteEnBusqueda){
    return tarifasISR.find(element => element.name == limiteEnBusqueda);
}

const limites = encontrarTarifa('tarifaMensual2023').limites;


//
const limitesSuperiores = limites.map(function(elemento){
    return elemento.limiteSuperior;
});

const limitesInferiores = limites.map(function(elemento){
    return elemento.limiteInferior;
});

const cuotasFijas = limites.map(function(elemento){
    return elemento.cuotaFija;
});

const porcentajes = limites.map(function(elemento){
    return elemento.porcentaje;
});