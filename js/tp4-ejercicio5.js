class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this._nombre = nombre;
    this._edad = edad;
    this._dni = this.generaDNI();
    this._sexo = sexo;
    this._peso = peso;
    this._altura = altura;
    this._anioNacimiento = anioNacimiento;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get edad() {
    return this._edad;
  }

  set edad(nuevaEdad) {
    this._edad = nuevaEdad;
  }

  get dni() {
    return this._dni;
  }

  get sexo() {
    return this._sexo;
  }

  set sexo(nuevoSexo) {
    this._sexo = nuevoSexo;
  }

  get peso() {
    return this._peso;
  }

  set peso(nuevoPeso) {
    this._peso = nuevoPeso;
  }

  get altura() {
    return this._altura;
  }

  set altura(nuevaAltura) {
    this._altura = nuevaAltura;
  }

  get añoNacimiento() {
    return this._anioNacimiento;
  }

  set añoNacimiento(nuevoAnioNacimiento) {
    this._anioNacimiento = nuevoAnioNacimiento;
  }

  mostrarGeneracion() {
    if (this._anioNacimiento >= 1930 && this._anioNacimiento <= 1948) {
      document.write(
        `<p>La persona de Nombre ${this._nombre} pertenece a la Silent Generation y su rasgo caracteristico es la "Austeridad".`
      );
    } else if (this._anioNacimiento >= 1949 && this._anioNacimiento <= 1968) {
      document.write(
        `<p>La persona de Nombre ${this._nombre} pertenece a la generacion Baby Boom y su rasgo caracteristico es la "Ambicion".`
      );
    } else if (this._anioNacimiento >= 1969 && this._anioNacimiento <= 1980) {
      document.write(
        `<p>La persona de Nombre ${this._nombre} pertenece a la generacion X y su rasgo caracteristico es la "Obsesion por el exito".`
      );
    } else if (this._anioNacimiento >= 1981 && this._anioNacimiento <= 1993) {
      document.write(
        `<p>La persona de Nombre ${this._nombre} pertenece a la generacion Y(Millennials) y su rasgo caracteristico es la "Frustracion".`
      );
    } else if (this._anioNacimiento >= 1994 && this._anioNacimiento <= 2010) {
      document.write(
        `<p>La persona de Nombre ${this._nombre} pertenece a la generacion Z y su rasgo caracteristico es la "Irreverencia".`
      );
    }
  }

  esMayorDeEdad() {
    return this._edad >= 18;
  }

  mostrarDatos() {
    return document.write(`<ul>
      <li>Nombre: ${this._nombre}</li>
      <li>Edad: ${this._edad}</li>
      <li>DNI: ${this._dni}</li>
      <li>Sexo: ${this._sexo}</li>
      <li>Peso: ${this._peso}</li>
      <li>Altura: ${this._altura}</li>
      <li>Año de Nacimiento: ${this._anioNacimiento}</li>
      </ul>`);
  }

  generaDNI() {
    return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
  }
}


const persona1 = new Persona("Juan", 30, "H", 70, 1.70, 1993);
document.write(`<h2>Datos de la persona:</h2>`);
persona1.mostrarDatos()
document.write(`<p>Es mayor de edad: ${persona1.esMayorDeEdad()}</p>`);
persona1.mostrarGeneracion();
