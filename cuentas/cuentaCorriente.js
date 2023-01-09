import { Cuenta } from "./cuenta.js";

export class CuentaCorriente extends Cuenta{
 static cantidadCuentas=0;

 constructor(cliente, numeroCuenta, agenciaCuenta) {
  /* this.setCliente(cliente); */
  super(cliente,numeroCuenta,agenciaCuenta,0);
  CuentaCorriente.cantidadCuentas++;
 };

 retirarDeCuenta(valor) {
  super._retirarDeCuenta(valor,5);
 };

 prueba(){
  /* super.prueba(); */
  console.log("Método hijo");
 };

};