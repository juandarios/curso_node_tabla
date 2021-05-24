
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

//console.log(argv);

//console.log('base: yargs', argv.b);

//const base = 5;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'created!') )
    .catch( err => console.log(err) );
