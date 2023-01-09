import { Empleado } from "./empleado.js";

export class Director extends Empleado{
 constructor(nombreEmpleado, dniEmpleado, salaraio){
  super(nombreEmpleado,dniEmpleado,salaraio);
 };
 verBonificacion(){
  const bono =10;
  return super._verBonificacion(bono);
 };
};