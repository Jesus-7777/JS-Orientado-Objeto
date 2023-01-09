//!Declaramos la clase cliente

//?Con el # al inicio de una variable se considera provada(en desarrollo, consultar)
export class Cliente {
 nombreCliente;
 dniCliente;
 rutCliente;
/*  autenticable;*/
 #clave;

 constructor(nombreCliente,dniCliente,rutCliente){
  this.nombreCliente=nombreCliente;
  this.dniCliente=dniCliente;
  this.rutCliente=rutCliente;
  this.#clave="";
 };
 asignarClave(clave) {
  this.#clave = clave;
 };

/*  get clave(){
  return this.#clave;
 }; */

 autenticable(clave){
  return true;
 };
};

export default Cliente;