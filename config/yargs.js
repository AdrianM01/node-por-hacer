const descripcion= {
    demand: true,
    alias: 'd',

};
const completado= {
    demand: false,
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion,
        completado
    }).command('actualizar', 'Actualizar', {
        descripcion,
        completado
    }).command('eliminar', 'Eliminar', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}