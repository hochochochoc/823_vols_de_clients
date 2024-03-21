class Vuelo {
    #numVuelo;
    #compania;
    #distancia;
    #emisiones;
    
    constructor(numVuelo, compania, distancia, emisiones) {
        this.#numVuelo = numVuelo;
        this.#compania = compania;
        this.#distancia = distancia;
        this.#emisiones = emisiones;
    }
    
    getNumVuelo() {return this.#numVuelo}
    getCompania() {return this.#compania}
    getDistancia() {return this.#distancia}
    getEmisiones() {return this.#emisiones}

    toString() {
        return  `Número del Vuelo: ${this.getNumVuelo()}\n` +
                `Compañía: ${this.getCompania()}\n` +
                `Distancia: ${this.getDistancia()}\n` +
                `Emisiones: ${this.getEmisiones()}`;
    }
}
