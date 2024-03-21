class Cliente {
    #dni;
    #nacionalidad;
    #edad;
    #vuelos;

    constructor(dni, nacionalidad, edad){
        this.#dni = dni;
        this.#nacionalidad = nacionalidad;
        this.#edad = edad;
        this.#vuelos = [];
    }
    
    agregarVuelo(vuelo){ 
        this.#vuelos.push(vuelo);
    }

    getDni() {return this.#dni}
    getNacionalidad() {return this.#nacionalidad}
    getEdad() {return this.#edad}
    getVuelos() {return this.#vuelos}

    // Setters no necesarios

    toString() {
        return `DNI del cliente: ${this.getDni()}\n` +
                `Nacionalidad: ${this.getNacionalidad()}\n`+
                `Edad: ${this.getEdad()}\n`+
                `Vuelos: ${this.getVuelos()}`;
    }
}

