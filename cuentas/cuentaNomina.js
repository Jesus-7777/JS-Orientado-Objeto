import {Cuenta} from "./cuenta.js"
export class cuentaNomina extends Cuenta{
 constructor(cliente, numeroCuenta, agenciaCuenta,saldoCuenta) {
  /* this.setCliente(cliente); */
  super(cliente, numeroCuenta, agenciaCuenta, saldoCuenta);
 };
 retirarDeCuenta(valor) {
  super._retirarDeCuenta(valor,1);
 };
}
