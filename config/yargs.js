const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en la consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Indica hasta que numero multiplicar'
        }
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b)) {
            throw 'La base tiene que ser un numero!'
        };
        if (isNaN( argv.h)) {
            throw 'El indicador "hasta" tiene que ser un numero!'
        }
        return true;
    })
    .argv;

    module.exports = argv;