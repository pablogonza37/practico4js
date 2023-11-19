class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  mostrarPropiedades() {
    document.write(`<h2>Propiedades del rectangulo:</h2>`);
    document.write(`<p>Alto: ${this.alto}</p>`);
    document.write(`<p>Ancho: ${this.ancho}</p>`);
   
  }

  modificarPropiedades(nuevoAlto, nuevoAncho) {
    this.alto = nuevoAlto;
    this.ancho = nuevoAncho;
  }

  perimetro() {
    return 2 * (this.alto + this.ancho);
  }

  area() {
    return this.alto * this.ancho;
  }
}

const rectangulo1 = new Rectangulo(9, 10);

rectangulo1.mostrarPropiedades();
document.write(`<p>Perímetro: ${rectangulo1.perimetro()}</p>`);
document.write(`<p>Área: ${rectangulo1.area()}</p>`);

rectangulo1.modificarPropiedades(6, 12);
rectangulo1.mostrarPropiedades();
document.write(`<p>Perímetro: ${rectangulo1.perimetro()}</p>`);
document.write(`<p>Área: ${rectangulo1.area()}</p>`);