//!Define nuevo cliente
const cliente1 = new Cliente();

//!Agrega los atributos del cliente
cliente1.nombreCliente = "Jesus Narvaez";
cliente1.dniCliente = "4542321356";
cliente1.rutCliente = "563289741";

const cuentaCoriente1 = new cuentaCoriente();
cuentaCoriente1.numeroCuenta = "432135468";
cuentaCoriente1.saldoCuenta = 3000;
cuentaCoriente1.agenciaCuenta=1002;

const cliente2 = new Cliente();
cliente2.nombreCliente = "Karen pantoja";
cliente2.dniCliente = "23254587961";
cliente2.rutCliente = "784512369";

const cuentaCoriente2 = new cuentaCoriente();
cuentaCoriente2.numeroCuenta = "1654898521225";
cuentaCoriente2.saldoCuenta = 1000;
cuentaCoriente2.agenciaCuenta=1002;

const cliente3 = new Cliente();
cliente3.nombreCliente = "Arley narvaez";
cliente3.dniCliente = "13284567891";
cliente3.rutCliente = "794613258";

const cuentaCoriente3 = new cuentaCoriente();
cuentaCoriente3.numeroCuenta = "99965874221545";
cuentaCoriente3.saldoCuenta = 1000;
cuentaCoriente3.agenciaCuenta = 1002;


cuentaCoriente2.depositosEnCuenta(1000);
console.log(cuentaCoriente2.saldoCuenta);