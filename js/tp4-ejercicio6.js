class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    get ISBN() {
      return this._ISBN;
    }
  
    set ISBN(nuevoISBN) {
      this._ISBN = nuevoISBN;
    }
  
    get titulo() {
      return this._titulo;
    }
  
    set titulo(nuevoTitulo) {
      this._titulo = nuevoTitulo;
    }
  
    get autor() {
      return this._autor;
    }
  
    set autor(nuevoAutor) {
      this._autor = nuevoAutor;
    }
  
    get numPaginas() {
      return this._numPaginas;
    }
  
    set numPaginas(nuevoNumPaginas) {
      this._numPaginas = nuevoNumPaginas;
    }
  
    mostrarLibro() {
      return document.write(`<p>El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene ${this._numPaginas} páginas.</p>`);
    }
  }
  
  const libro1 = new Libro('978-84-344-2981-9', 'La gaya ciencia', 'Friedrich Nietzsche', 488);
  const libro2 = new Libro('097-89-50518873-4', 'La Interpretacion de los Sueños ', 'Sigmund Freud', 432);
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  

  if (libro1.numPaginas > libro2.numPaginas) {
    document.write(`<p>${libro1.titulo} tiene más páginas que ${libro2.titulo}.</p>`);
  } else if (libro1.numPaginas < libro2.numPaginas) {
    document.write(`<p>${libro2.titulo} tiene más páginas que ${libro1.titulo}.</p>`);
  } else {
    document.write(`<p>${libro1.titulo} y ${libro2.titulo} tienen la misma cantidad de páginas.</p>`);
  }
  