window.onload = function() {
    document.getElementById("agregarEjemplos").onclick = agregarEjemplos;
    document.getElementById("crearCliente").onclick = crearCliente;
    document.getElementById("borrarCliente").onclick = borrarCliente;
    document.getElementById("crearVuelo").onclick = crearVuelo;
    document.getElementById("calcMediaEdad").onclick = calcMediaEdad; 
    document.getElementById("calcHuella").onclick = calcHuella;
    document.getElementById("calcHuellaMedia").onclick = calcHuellaMedia; 
};

const clientes = [
    new Cliente (1, "ES", 16, []),
    new Cliente (2, "ES", 36, []),
    new Cliente (3, "US", 35, [])
]


function agregarEjemplos() {
    // añadir 3 vuelos al cliente 1:

    let vuelo1 = new Vuelo(1, "Iberia", 10000, 100);
    let vuelo2 = new Vuelo(2, "Vietnam Airlines", 2000, 200);
    let vuelo3 = new Vuelo(3, "Ryanair", 1500, 150);

    clientes[0].agregarVuelo(vuelo1);
    clientes[0].agregarVuelo(vuelo2);
    clientes[0].agregarVuelo(vuelo3);

    // Un vuelo para cliente 2 y 3:
    let vuelo4 = new Vuelo(1, "Iberia", 10000, 104);
    let vuelo5 = new Vuelo(2, "Ryanair", 2000, 200);
    

    clientes[1].agregarVuelo(vuelo4);
    clientes[2].agregarVuelo(vuelo5);
    
    console.table(clientes);
    clientes.forEach(cliente => {
        console.log(`Vuelos del cliente con DNI ${cliente.getDni()}:`);
        console.table(cliente.getVuelos());
      });
}


function crearCliente() {
    let dni = prompt("Indica el DNI del cliente:");
    let index = clientes.findIndex(cliente => cliente.getDni() === dni);

    if (index === -1) { // Si no existe ya
        let nacionalidad = prompt("Indica la nacionalidad del cliente:");
        let edad = prompt("Indica la edad del cliente:");
        let vuelo = [];
        
        // Crear nuevo cliente
        let nuevoCliente = new Cliente(
            dni, 
            nacionalidad, 
            edad, 
            vuelo
        );

        clientes.push(nuevoCliente);
        
        console.table(clientes);
        alert(nuevoCliente.toString());

    } else {
        alert("El cliente ya existe");
    }
}


function borrarCliente(){
    let dni = prompt("Indica el DNI del cliente que quieres eliminar:");

    let index = clientes.findIndex(cliente => cliente.getDni() === dni);

    if (index === -1) { // Si no existe
        alert("Este cliente no existe.");

    } else {
        let confirmacion = confirm("¿Estás seguro de querer eliminar este vuelo?");
        if(confirmacion){
            clientes.splice(index, 1);
            console.log(clientes);
        }
    }
}
    

function crearVuelo() {
    let nuevoNumVuelo = prompt("Indica el número del vuelo:");
    let nuevaCompania = prompt("Indica la compañía del vuelo:");
    let nuevaDistancia = prompt("Indica la distancia del vuelo:");
    let nuevasEmisiones = prompt("Indica las emisiones del vuelo:");
    
    // Crear nuevo vuelo
    let nuevoVuelo = new Vuelo(
        nuevoNumVuelo, 
        nuevaCompania, 
        nuevaDistancia, 
        nuevasEmisiones);

    let clienteVuelo = prompt("Indica el dni del cliente del vuelo:");
    
    let index = clientes.findIndex(cliente => cliente.getDni() == clienteVuelo)

    if (index !== -1){
        clientes[index].agregarVuelo(nuevoVuelo);
        console.log(clientes);
        alert(nuevoVuelo.toString());
        
        console.table(clientes);
        clientes.forEach(cliente => {
            console.log(`Vuelos del cliente con DNI ${cliente.getDni()}:`);
            console.table(cliente.getVuelos());
        });
        
    } else{
        alert("Este cliente no existe.");
    }
}


function calcMediaEdad() {
    let sum = 0;
    let menores = 0;
    
    clientes.forEach(cliente =>{
        if (cliente.getEdad() >= 18) {
            sum += cliente.getEdad();
        } else {
            menores ++;
        }
    });
    
    let mediaEdad = (sum / (clientes.length - menores)).toFixed(2);
    console.log("mediaEdad: ", mediaEdad);
    alert(`Media de edades de los clientes mayores de edad: ${mediaEdad}.`);
}


function calcHuella() {
    let huella = 0;

    let dni = prompt("Indica el DNI del cliente del que quieres calcular la huella:");

    let index = clientes.findIndex(cliente => cliente.getDni() == dni);
    console.log("index for dni", index);

    clientes[index].getVuelos().forEach(vuelo => {
        console.log(vuelo.getEmisiones());      // también con for - in?
        huella += vuelo.getEmisiones();
    });

    console.log("huella: ",  huella);
    alert(`Huella del cliente con la DNI \"${dni}\": ${huella} toneladas de CO₂.`);
}


function calcHuellaMedia() {
    let huellaCompleta = 0;
    
    clientes.forEach(cliente => {
        let huellaCliente = 0;
        cliente.getVuelos().forEach(vuelo =>{
            huellaCliente += vuelo.getEmisiones();
        });
        huellaCompleta += huellaCliente;
        console.log("huellas individuales: ", huellaCliente);
    });
    let huellaMedia = (huellaCompleta / clientes.length).toFixed(2);
    console.log("Huella media: ", huellaMedia);
    alert(`La huella de carbono media de todos los clientes es de ${huellaMedia} toneladas de CO₂.`);
}