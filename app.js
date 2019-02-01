const { argv } = require('./config/yargs');
const porHacer = require('./todo/todo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        let listado= porHacer.listar();

        for(let tarea of listado)
        {
            
            console.log('==========Tareas a Realizar========='.green);
            console.log(`Tarea: ${tarea.descripcion}`.blue);
            console.log(`Estado: ${tarea.completado}`.blue);
            console.log('==================================='.green);

        }

        break;
    case 'actualizar':
        
        console.log(`Actualizar una tarea ${argv.descripcion}, realizado: ${porHacer.actualizar(argv.descripcion, argv.completado)}`);
        break;
    case 'eliminar':        
        console.log(`Eliminar una tarea ${argv.descripcion}, realizado: ${porHacer.eliminar(argv.descripcion)}`);
    break;
    default:
        console.log('Comando no reconocido');

}