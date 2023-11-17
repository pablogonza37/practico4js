// Ejercicio 1


const Auto = {
    color: 'Blanco',
    marca: 'Peugeot',
    modelo: '308',
    encendido: false,
  
    encender: function() {
      if (!this.encendido) {
        this.encendido = true;
        console.log('Auto encendido');
      } else {
        console.log('El auto está encendido');
      }
    },
  
    apagar: function() {
      if (this.encendido) {
        this.encendido = false;
        console.log('El auto se apagó');
      } else {
        console.log('El auto está apagado');
      }
    }
  };
  
  Auto.encender();
  Auto.apagar();