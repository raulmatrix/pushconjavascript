    var arreglo = [];

function guardarDatos(){

    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var nombreCompleto = nombre +" "+apellidos;
    
    arreglo.push(nombreCompleto);
    console.log(arreglo); // o tambien podria colocar el for para mostrar datos
    //mostrarDatos();
    //console.table(arreglo);
    
}   



function mostrarDatos(){
    //console.log(arreglo);
    for(var i=0;i<arreglo.length;i++){
        console.log(arreglo[i]);
        
    }
    
}



