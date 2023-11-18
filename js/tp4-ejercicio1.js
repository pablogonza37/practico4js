// Ejercicio 1


const Auto = {
    color: 'Blanco',
    marca: 'Peugeot',
    modelo: '308',
    encendido: false,
  
    encender: function() {
      if (!this.encendido) {
        this.encendido = true;
        document.write('<p>Auto encendido</p>');
      } else {
        document.write('<p>El auto está encendido</p>');
      }
    },
  
    apagar: function() {
      if (this.encendido) {
        this.encendido = false;
        document.write('<p>El auto se apagó</p>');
      } else {
        document.write('<p>El auto está apagado</p>');
      }
    }
  };
  
  Auto.encender();
  Auto.apagar();