class Rectangulo {
  constructor(alto, ancho) {
      this._alto = alto;
      this._ancho = ancho;
  }

  get alto() {
      return this._alto;
  }

  set alto(nuevoAlto) {
      if (nuevoAlto > 0) {
          this._alto = nuevoAlto;
      } else {
          document.write("El alto debe ser un número positivo.");
      }
  }

  get ancho() {
      return this._ancho;
  }

  set ancho(nuevoAncho) {
      if (nuevoAncho > 0) {
          this._ancho = nuevoAncho;
      } else {
          document.write("El ancho debe ser un número positivo.");
      }
  }

  mostrarPropiedades() {
    document.write(`<h2>Propiedades del rectangulo:</h2>`);
    document.write(`<p>Alto: ${this._alto}</p>`);
    document.write(`<p>Ancho: ${this._ancho}</p>`);
  }

  calcularPerimetro() {
      return 2 * (this._alto + this._ancho);
  }

  calcularArea() {
      return this._alto * this._ancho;
  }
}

const miRectangulo = new Rectangulo(6, 10);
miRectangulo.mostrarPropiedades();

miRectangulo.alto = 5;
miRectangulo.ancho = 15;

miRectangulo.mostrarPropiedades();

const perimetro = miRectangulo.calcularPerimetro();
const area = miRectangulo.calcularArea();

document.write(`<h2>Calulo de Perímetro y Área</h2>`);
document.write(`<p>Perímetro: ${perimetro}</p>`);
document.write(`<p>Área: ${area}</p>`);
