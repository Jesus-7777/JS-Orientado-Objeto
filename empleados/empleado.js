export class Empleado {
 #nombreEmpleado;
 #dniEmpleado;
 #salario;
 #clave;
 constructor(nombreEmpleado, dniEmpleado, salario) {
  this.#nombreEmpleado = nombreEmpleado;
  this.#dniEmpleado = dniEmpleado;
  this.#salario = salario;
  this.#clave = "";
 };

 asignarClave(clave) {
  this.#clave = clave;
 };

 autenticable(clave){
  return clave == this.#clave;
 };

 verBonificacion() {
  return this.#salario;
 };
 _verBonificacion(bono) {
  return this.#salario + this.#salario * bono / 100;
 };
};