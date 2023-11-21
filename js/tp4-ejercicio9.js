class Animal {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  get nombre() {
    return this._nombre;
  }

  get edad() {
    return this._edad;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  set edad(nuevaEdad) {
    if (nuevaEdad > 0) {
      this._edad = nuevaEdad;
    } else {
      console.error("La edad debe ser un número positivo.");
    }
  }

  emitirSonido() {
    document.write(`<p>Sonido de Animal</p>`);
  }
}

class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this._raza = raza;
  }

  get raza() {
    return this._raza;
  }

  set raza(nuevaRaza) {
    this._raza = nuevaRaza;
  }

  emitirSonido() {
    document.write(`<p>${this._nombre} dice: ¡Guau! ¡Guau!</p>`);
  }
}

class Gato extends Animal {
  constructor(nombre, edad, color) {
    super(nombre, edad);
    this._color = color;
  }

  get color() {
    return this._color;
  }

  set color(nuevoColor) {
    this._color = nuevoColor;
  }

  emitirSonido() {
    document.write(`<p>${this._nombre} dice: ¡Miau! ¡Miau!</p>`);
  }
}

const miPerro = new Perro("Simon", 5, "Chow Chow");
const miGato = new Gato("Jony", 2, "Gris");

miPerro.nombre = "Boby"; 

miPerro.emitirSonido(); 
miGato.emitirSonido(); 
