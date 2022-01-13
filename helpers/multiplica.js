const fs = require('fs');
const colors = require('colors');
let salida,consola ='';

const crearArchivo = async (nmr,list,h=12)=>{

  try {
    
    
    for (let i = 1; i <= h; i++) {
      salida += `${nmr} x ${i} = ${nmr*i}\n`;
      consola += `${nmr} ${'x'.yellow} ${i} ${'='.yellow} ${nmr*i}\n`;
    }
    if(list===true){
      console.log('========================='.yellow)
      console.log(`     Tabla del ${nmr}`.white)
      console.log('========================='.yellow)
      console.log(consola)
    }
    
    fs.writeFileSync(`./salida/tabla-${nmr}.txt`,salida);
    return `tabla-${nmr}.txt `;
  } catch (error) {
    throw error;
  }
  
}

module.exports = {
  crearArchivo
}