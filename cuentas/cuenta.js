export class Cuenta{
 #cliente;
 #saldoCuenta;

 constructor(cliente, numeroCuenta, agenciaCuenta,saldoCuenta){
  //!forma de proteger la clase padre, para evitar acceso no apropiado
  if (this.constructor==Cuenta) {
   throw new Error("NO se puede instanciar objetos de la clase Cuenta");
  }
  this.#cliente=cliente;
  this.numeroCuenta=numeroCuenta;
  this.agenciaCuenta=agenciaCuenta;
  this.#saldoCuenta=saldoCuenta;
 };

  //!asignasr valores a un atributo privado
 
  set setCliente(valor) {
   if (valor instanceof Cliente) {
    this.#cliente = valor;
   };
  };
 
  get getCliente() {
   return this.#cliente;
  };

   //!creacon de un metodo
 depositoEnCuenta(valor) {
  if (valor > 0) {
   this.#saldoCuenta += valor;
  }
  return this.#saldoCuenta;
 };

 retirarDeCuenta(valor) {
  //Método abstracto
  throw new Error("Debe implementar el método retirar de cuenta en su clase");
 };

 //!metodo privedo
 _retirarDeCuenta(valor,comision) {
  valor = valor * (1+comision/100);
  if (valor <= this.#saldoCuenta) {
   this.#saldoCuenta -= valor;
  }
  return this.#saldoCuenta;
 };
 
 verSaldo() {
  return this.#saldoCuenta;
 };

 transferirParaCuenta(valor, cuentaDestino) {
  this.retirarDeCuenta(valor);
  cuentaDestino.depositoEnCuenta(valor);
 };
 prueba(){
  console.log("Metodo Padre");
 };
}