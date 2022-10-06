require('colors');

const mostrarMenu = () => {
    console.clear();
    console.log('====================='.green);
    console.log('Seleccione una opción'.green);
    console.log('=====================\n'.green);

    console.log('1. Crear tarea'.green);
    console.log('2. Listar tarea'.green);
    console.log('3. Listar tarea completado'.green);
    console.log('4. Listar tareas pendientes'.green);
    console.log('5. Completar tarea(s)'.green);
    console.log('6. Borrar tarea'.green);
    console.log('0. Salir \n'.green);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    readline.question('Selecciones una opción: ', (opt)=> {
        console.log({opt})
        readline.close() 
    })
}

const pausa = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    readline.question(`Presione ${'Enter'.blue} para continuar\n`, (opt)=> {
        readline.close() 
    })
}

module.exports = {
    mostrarMenu,
    pausa
}