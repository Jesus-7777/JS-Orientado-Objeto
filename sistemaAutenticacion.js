export class SistemaAutenticacion {
 //!Definiendo una funcion estatica
 static login(usuario, clave) {
  if ("autenticable" in usuario && usuario.autenticable instanceof Function) {
   return usuario.autenticable(clave);
  } else {
   return false;
  };
  /* if (usuario.autenticable(clave)) {
   return usuario.clave==clave;
  }; */
  /*  if (empleado.clave==clave) {
    return true;
   }else{
    return false;
   }; */
 };
};