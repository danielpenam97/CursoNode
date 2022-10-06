let salida  = '';
const fs = require('fs');
const crearArchivo = async (base) => {
    try {
        for(let i = 0; i <= 10; i++){
            salida += `${base} X ${i} = ${base * i} \n`
        }
        
        fs.writeFileSync(`tabla${base}-.txt`, salida);
        return `tabla${base}-.txt`;
    }catch(err){
        throw err
    }
        
}
module.exports =  {
    crearArchivo
}