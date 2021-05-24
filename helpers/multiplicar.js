const fs = require('fs');
const colors = require('colors');
const { string } = require('yargs');

// const crearArchivo = ( base = 5 ) => {

//     return new Promise( ( resolve, reject ) => {

//         console.log('===================');
//         console.log('    Tabla del', base);
//         console.log('===================');

//         let salida = '';
//         let nombreArchivo = `tabla_${base}.txt`;

//         for(let i = 1; i <= 10; i++) {
//             salida += `${ base } x ${ i } = ${ base * i }\n`;
//         }
        
//         console.log(salida);
//         fs.writeFileSync( nombreArchivo, salida);

//         (salida)
//             ? resolve (nombreArchivo)
//             : reject('No se puede crear el archivo!')

//     });

// }

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida = '';
        let consola = '';
        let nombreArchivo = `tabla_${base}.txt`;
    
        for(let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ colors.green(base) } ${ 'x'.yellow } ${ colors.blue(i) } = ${ colors.inverse(base * i) }\n`;
        }
        
        if (listar) {
            console.log('==================='.yellow);
            console.log('    Tabla del'.italic, colors.green(base));
            console.log('==================='.yellow);
            console.log(consola);
        }

        fs.writeFileSync( `./salida/${ nombreArchivo }`, salida);
    
        return nombreArchivo.zebra;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}
