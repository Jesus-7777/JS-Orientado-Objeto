class Jugador{

 static totalJugadores = 7;

 constructor(){
  Jugador.totalJugadores++;
 }
}
console.log(Jugador.totalJugadores);