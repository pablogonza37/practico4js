const Cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (deposito) {
    if (deposito <= 0){
        document.write(`<p>Ingrese un valor valido</p>`);
    }else {
        this.saldo += deposito;
      document.write(`<p>Realizo un deposito de: $ ${deposito}</p>`);
    }
  },

  extraer: function (extraccion) {
     if (extraccion <= 0){
        document.write(`<p>Ingrese un valor valido</p>`);
     }else if (extraccion > this.saldo){
        document.write(`<p>No dispones de saldo suficiente</p>`);
     }else {
        this.saldo -= extraccion;
    document.write(`<p>Realizo una extraccion de: $ ${extraccion}</p>`);
     }
  },

  informar: function () {
    document.write(`<p>Informacion de cuenta:</p>`);
    document.write(`<ul>
        <li>Titular: ${Cuenta.titular}</li>
        <li>Saldo: $ ${Cuenta.saldo}</li>
        </ul>`);
  },
};

Cuenta.informar();

Cuenta.ingresar(500);

Cuenta.informar();

Cuenta.extraer(100);

Cuenta.informar();
