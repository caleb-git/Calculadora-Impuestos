const tarifasISR = [];
tarifasISR.push({
    name: 'tarifaMensual2023', 
    limites:[
        {limiteInferior: 0.01, limiteSuperior: 746.04, cuotaFija: 0.00, porcentaje:1.92},
        {limiteInferior: 746.05, limiteSuperior: 6332.05, cuotaFija: 14.32, porcentaje:6.40},
        {limiteInferior: 6332.06, limiteSuperior: 11128.01, cuotaFija: 371.83, porcentaje:10.88},
        {limiteInferior: 11128.02, limiteSuperior: 12935.82, cuotaFija: 893.63, porcentaje:16},
        {limiteInferior: 12935.83, limiteSuperior: 15487.71, cuotaFija: 1182.88, porcentaje:17.92},
        {limiteInferior: 15487.72, limiteSuperior: 31236.49, cuotaFija: 1640.18, porcentaje:21.36},
        {limiteInferior: 31236.50, limiteSuperior: 49233.00, cuotaFija: 5004.12, porcentaje:23.52},
        {limiteInferior: 49233.01, limiteSuperior: 93993.90, cuotaFija: 9236.89, porcentaje:30.00},
        {limiteInferior: 93993.91, limiteSuperior: 125325.20, cuotaFija: 22665.17, porcentaje:32.00},
        {limiteInferior: 125325.21, limiteSuperior: 375975.61, cuotaFija: 32691.18, porcentaje:34.00},
        {limiteInferior: 375325.21, limiteSuperior: 375975.62, cuotaFija: 117912.32, porcentaje:35.00},
        
    ],
});

tarifasISR.push({
    name: 'hasta6332', 
    limites:[
        {limiteInferior: 746.05, limiteSuperior: 6332.05, cuotaFija: 14.32, porcentaje:6.40},
    ],
});

tarifasISR.push({
    name: 'hasta6332', 
    limites:[
        {limiteInferior: 746.05, limiteSuperior: 6332.05, cuotaFija: 14.32, porcentaje:6.40}
    ],
});

tarifasISR.push({
    name: 'hasta11128', 
    limites:[
        {limiteInferior: 6332.06, limiteSuperior: 11128.01, cuotaFija: 371.83, porcentaje:10.88}
    ],
});

tarifasISR.push({
    name: 'hasta12935', 
    limites:[
        {limiteInferior: 11128.02, limiteSuperior: 12935.82, cuotaFija: 893.63, porcentaje:16}
    ],
});

tarifasISR.push({
    name: 'hasta15487', 
    limites:[
        {limiteInferior: 12935.83, limiteSuperior: 15487.71, cuotaFija: 1182.88, porcentaje:17.92}
    ],
});

tarifasISR.push({
    name: 'hasta31236', 
    limites:[
        {limiteInferior: 15487.72, limiteSuperior: 31236.49, cuotaFija: 1640.18, porcentaje:21.36}
    ],
});

tarifasISR.push({
    name: 'hasta49233', 
    limites:[
        {limiteInferior: 31236.50, limiteSuperior: 49233.00, cuotaFija: 5004.12, porcentaje:23.52}
    ],
});

tarifasISR.push({
    name: 'hasta93993.90', 
    limites:[
        {limiteInferior: 49233.01, limiteSuperior: 93993.90, cuotaFija: 9236.89, porcentaje:30.00}
    ],
});

tarifasISR.push({
    name: 'hasta125325', 
    limites:[
        {limiteInferior: 93993.91, limiteSuperior: 125325.20, cuotaFija: 22665.17, porcentaje:32.00}
    ],
});

tarifasISR.push({
    name: 'hasta375975', 
    limites:[
        {limiteInferior: 125325.21, limiteSuperior: 375975.61, cuotaFija: 32691.18, porcentaje:34.00}
    ],
});

tarifasISR.push({
    name: 'mas375975', 
    limites:[
        {limiteInferior: 375325.21, limiteSuperior: 375975.62, cuotaFija: 117912.32, porcentaje:35.00}
    ],
});

