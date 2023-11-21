class Avion {
    constructor(nombre, capacidad, destino) {
        this._nombre = nombre;
        this._capacidad = capacidad;
        this._destino = destino;
        this._listaPasajeros = [];
    }

    get nombre() {
        return this._nombre;
    }

    get capacidad() {
        return this._capacidad;
    }

    get destino() {
        return this._destino;
    }

    get listaPasajeros() {
        return this._listaPasajeros;
    }

    abordar(pasajero) {
        if (this._listaPasajeros.length < this._capacidad) {
            this._listaPasajeros.push(pasajero);
            document.write(`<p>Pasajero ${pasajero} abordado en el avión ${this._nombre}.</p>`);
        } else {
            document.write(`<p>¡El avión ${this._nombre} está lleno! No se puede abordar a más pasajeros.</p>`);
        }
    }
}

class Aeropuerto {
    constructor(nombreAeropuerto) {
        this._nombreAeropuerto = nombreAeropuerto;
        this._listaAviones = [];
    }

    get nombreAeropuerto() {
        return this._nombreAeropuerto;
    }

    agregarAvion(avion) {
        this._listaAviones.push(avion);
        document.write(`<p>${avion.nombre} agregado al aeropuerto ${this._nombreAeropuerto}.</p>`);
    }

    buscarAvion(nombreAvion) {
        return this._listaAviones.find(avion => avion.nombre === nombreAvion);
    }
}


const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

const avion1 = new Avion("Avion 1", 100, "Madrid");
const avion2 = new Avion("Avion 2", 200, "Buenos Aires");
const avion3 = new Avion("Avion 3", 100, "Tucuman");

aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

const nombreAvionABuscar = "Avion 3";
const avionEncontrado = aeropuertoInternacional.buscarAvion(nombreAvionABuscar);

if (avionEncontrado) {
    document.write(`<p>${nombreAvionABuscar} encontrado en el aeropuerto.</p>`);
    const pasajeroAAbordar = "Pasajero1";
    avionEncontrado.abordar(pasajeroAAbordar);
} else {
    document.write(`<p>${nombreAvionABuscar} no encontrado en el aeropuerto.</p>`);
}
