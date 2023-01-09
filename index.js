import { Cliente } from "./cliente.js";
import { CuentaCorriente } from "./cuentas/cuentaCorriente.js";
import { cuentaAhorro } from "./cuentas/cuentaAhorro.js"; 
import { Cuenta } from "./cuentas/cuenta.js";
import { cuentaNomina } from "./cuentas/cuentaNomina.js";
import { Empleado } from "./empleados/empleado.js";
import { Gerente } from "./empleados/gerente.js";
import { Director } from "./empleados/director.js";
import { SistemaAutenticacion } from "./sistemaAutenticacion.js";


const cliente = new Cliente("Jesus","455631123","2354648");
cliente.asignarClave("11111");
console.log(SistemaAutenticacion.login(cliente,"1111"));

//const cliente2 = new Cliente("Maria","5568468","999871321");

const empleado =new Empleado("Juan Perez","4512",100);
empleado.asignarClave("12345");
console.log(SistemaAutenticacion.login(empleado,"12345"));


const gerente =new Gerente("Pedro Rivas","54862",200);
gerente.asignarClave("22222");
console.log(SistemaAutenticacion.login(gerente,"22222"));


const director =new Director("Jesus Narvaez","2313125",300);
director.asignarClave("33333");
console.log(SistemaAutenticacion.login(director,"3333"));