import {
 Cuenta
} from "./cuenta.js";

export class cuentaAhorro extends Cuenta {
 constructor(cliente, numeroCuenta, agenciaCuenta,saldoCuenta) {
  /* this.setCliente(cliente); */
  super(cliente, numeroCuenta, agenciaCuenta, saldoCuenta);
 };
 retirarDeCuenta(valor) {
  super._retirarDeCuenta(valor,2);
 };
};