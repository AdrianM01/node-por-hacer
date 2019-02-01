const fs = require('fs');

let listadoPorHacer = [];

const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error("Error al guardar".red, err);
        console.log('Datos guardados correctamente'.green);
    });
}

const leerDB=()=>{
    try{

        listadoPorHacer= require('../db/data.json');

    }catch(e)
    {
        listadoPorHacer = []; 
    }

}

const listar= () =>{
    leerDB();
    return listadoPorHacer;
}


const actualizar= (descripcion, completado=true)=>{
    leerDB();
    let index=listadoPorHacer.findIndex( tarea=>{
        return tarea.descripcion===descripcion;
    });
    
    if(index>=0)
    {
        listadoPorHacer[index].completado=completado;
        guardaDB();
        return true;
    }
    else
    {
        return false;
    }
}

const eliminar= (descripcion)=>{
    leerDB();

    let index=listadoPorHacer.findIndex( tarea=>{
        return tarea.descripcion===descripcion;
    });    
    
    let nuevoListado= listadoPorHacer.filter( tarea=>{
        return tarea.descripcion!==descripcion;
    });    

    if(index>=0)
    {
        listadoPorHacer.splice(index,1);
        guardaDB();
        return true;
    }
    else
    {
        return false;
    }
}

const crear = (descripcion) => {

    leerDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardaDB();
    return listadoPorHacer;
};

module.exports = {
    crear,
    listar,
    actualizar,
    eliminar

}