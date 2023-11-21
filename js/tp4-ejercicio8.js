class Persona {
    constructor(nombre, edad, profesion) {
      this._nombre = nombre;
      this._edad = edad;
      this._profesion = profesion;
    }

    get nombre() {
        return this._nombre;
      }
    
      get edad() {
        return this._edad;
      }
    
      get profesion() {
        return this._profesion;
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
    
      set profesion(nuevaProfesion) {
        this._profesion = nuevaProfesion;
      }
  
    saludar() {
      document.write(`<p>Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.</p>`);
    }
  
    despedirse() {
      document.write(`<p>Adiós, Hasta luego.</p>`);
    }
  }
  
  const persona1 = new Persona('Rodrigo', 30, 'Programador');
  const persona2 = new Persona('Evelin', 25, 'Psicologa');
  
  persona1.saludar();
  persona1.despedirse();
  
  persona2.saludar();
  persona2.despedirse();
  