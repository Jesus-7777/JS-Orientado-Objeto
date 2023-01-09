import { Empleado } from "./empleado.js";

export class Gerente extends Empleado{
 constructor(nombreEmpleado, dniEmpleado,salario){
  super(nombreEmpleado,dniEmpleado,salario);
 };
 verBonificacion(){
  const bono =5;
  return super._verBonificacion(bono);
 };
};