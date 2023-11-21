class Contacto {
  constructor(nombre, telefono) {
    this._nombre = nombre;
    this._telefono = telefono;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get telefono() {
    return this._telefono;
  }

  set telefono(nuevoTelefono) {
    this._telefono = nuevoTelefono;
  }
}

class Agenda {
  constructor(tamano = 10) {
    this._contactos = [];
    this._tamanoMaximo = tamano;
  }

  aniadirContacto(contacto) {
    if (this._contactos.length < this._tamanoMaximo) {
      this._contactos.push(contacto);
      console.log(`Se añadio el contacto ${contacto.nombre} a la agenda.`);
    } else {
      console.log("La agenda está llena.");
    }
  }

  existeContacto(contacto) {
    return this._contactos.some((c) => c.nombre === contacto.nombre);
  }

  listarContactos() {
    console.log("Lista de contactos:");
    this._contactos.forEach((contacto) =>
      console.log(`${contacto.nombre}: ${contacto.telefono}`)
    );
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this._contactos.find(
      (contacto) => contacto.nombre === nombre
    );
    if (contactoEncontrado) {
      console.log(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
    } else {
      console.log(`No se encontró un contacto con el nombre ${nombre}.`);
    }
  }

  eliminarContacto(contacto) {
    const indiceContacto = this._contactos.findIndex(
      (c) => c.nombre === contacto.nombre
    );
    if (indiceContacto !== -1) {
      this._contactos.splice(indiceContacto, 1);
      console.log(`Contacto ${contacto.nombre} eliminado de la agenda.`);
    } else {
      console.log(
        `No se encontró un contacto con el nombre ${contacto.nombre}.`
      );
    }
  }

  agendaLlena() {
    return this._contactos.length === this._tamanoMaximo;
  }

  huecosLibres() {
    return this._tamanoMaximo - this._contactos.length;
  }
}

const agenda = new Agenda();

while (true) {
  const opcion = prompt(
    `Menú de la Agenda Telefónica:\n1. Añadir Contacto\n2. Buscar Contacto\n3. Eliminar Contacto\n4. Listar Contactos\n5. Agenda Llena\n6. Huecos Libres\n0. Salir\nIngrese el número de la opción:`
  );

  switch (opcion) {
    case "1":
      const nombreNuevo = prompt("Ingrese el nombre del nuevo contacto:");
      const telefonoNuevo = prompt("Ingrese el teléfono del nuevo contacto:");
      const nuevoContacto = new Contacto(nombreNuevo, telefonoNuevo);
      agenda.aniadirContacto(nuevoContacto);
      break;
    case "2":
      const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
      agenda.buscarContacto(nombreBuscar);
      break;
    case "3":
      const nombreEliminar = prompt(
        "Ingrese el nombre del contacto a eliminar:"
      );
      const contactoEliminar = new Contacto(nombreEliminar, "");
      agenda.eliminarContacto(contactoEliminar);
      break;
    case "4":
      agenda.listarContactos();
      break;
    case "5":
      console.log(`La agenda está llena: ${agenda.agendaLlena()}`);
      break;
    case "6":
      console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
      break;
    case "0":
      console.log("Saliendo del programa.");
      process.exit(0);
    default:
      console.log("Opción no válida. Por favor, ingrese un número del menú.");
  }
}
