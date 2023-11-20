class Producto {
    constructor(codigo, nombre, precio) {
      this._codigo = codigo;
      this._nombre = nombre;
      this._precio = precio;
    }
  
    get codigo() {
      return this._codigo;
    }
  
    set codigo(nuevoCodigo) {
      this._codigo = nuevoCodigo;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get precio() {
      return this._precio;
    }
  
    set precio(nuevoPrecio) {
      this._precio = nuevoPrecio;
    }
  
    imprimeDatos() {
      document.write(`<p>Informacion del producto:</p>`);
      document.write(`<ul>
      <li>Código: ${this._codigo}</li>
      <li>Nombre: ${this._nombre}</li>
      <li>Precio: ${this._precio}</li>
      </ul>`)
    }
  }
  
  const producto1 = new Producto("001", "Producto 1", 200.99);
  const producto2 = new Producto("002", "Producto 2", 80.49);
  const producto3 = new Producto("003", "Producto 3", 150.00);
  
 
  producto1.codigo = "001";
  producto2.nombre = "Producto modificado";
  producto3.precio = 70.50;
  
  
  const productosArray = [producto1, producto2, producto3];
  
  
  productosArray.forEach(producto => {
    producto.imprimeDatos();
  });
  