/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {
  alert("Bienvenido al piedra, papel o tijera de Front 2 😎");

  let nombre;

  do {
    nombre = prompt("Ingrese su nombre por favor (no menos de 3 caracteres): ");
    console.log("Se intenta registrar: " + nombre);
  } while (nombre == null || nombre == undefined || nombre.length <= 3);

  alert("Gracias por jugar " + nombre.toUpperCase() + ". Mucha suerte!");

  return nombre.toUpperCase();
}

const nombreJugador = iniciarJuego();
console.log("Se registro: " + nombreJugador);

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 2                                 */
/* -------------------------------------------------------------------------- */
function pedirJugada() {
  let eleccion = 0;

  do {
    eleccion = parseInt(
      prompt("Ingrese para jugar: 1(piedra), 2(papel), 3(tijera)")
    );
  } while (isNaN(eleccion) || eleccion < 1 || eleccion > 3);

  console.log("La eleccion del jugador es: " + eleccion);

  return eleccion;
}
/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                                 */
/* -------------------------------------------------------------------------- */
function jugadaRandom() {
  let numero = parseInt(Math.random() * 3 + 1);

  console.log("La eleccion de la computadora es: " + numero);
  return numero;
}
/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */
function compararJugadas() {
  const resultadosPosibles = [
    "Genial! Ganaste! 😁",
    "Esto fue un empate 😒",
    "Que lastima, perdiste 😥",
  ];

  const eleccionJugador = pedirJugada();
  const eleccionComputadora = jugadaRandom();

  let resultadoRonda = resultadosPosibles[0];

  if (eleccionJugador == eleccionComputadora) {
    resultadoRonda = resultadosPosibles[1];
  } else if (
    (eleccionJugador == 1 && eleccionComputadora == 2) ||
    (eleccionJugador == 2 && eleccionComputadora == 3) ||
    (eleccionJugador == 3 && eleccionComputadora == 1)
  ) {
    resultadoRonda = resultadosPosibles[2];
  }

  return resultadoRonda;
}

const resultadoDePartida = compararJugadas();
console.log(resultadoDePartida);
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.


/* -------------------------------------------------------------------------- */
/*                                  FUNCION 5                                 */
/* -------------------------------------------------------------------------- */

function mensajeResultado (){
  let imprimirXConsola;
  alert(resultadoDePartida);
  
  if ( resultadoDePartida == "Que lastima, perdiste 😥" ){
    imprimirXConsola= "Segui participando flojit@";
  } else if( resultadoDePartida == "Esto fue un empate 😒"){
    imprimirXConsola= "empataste pecho frio";
  } else{
    imprimirXConsola=  "Por fin ganaste";
  }
  return imprimirXConsola;
}
const mensaje = mensajeResultado();
console.log(mensaje);



function mostrarResultado(){
    let puntajes={
      usuario:0,
      computadora: 0,
      empates:0,
    };

    while (puntajes.usuario < 3 && puntajes.computadora < 3){
        const resultadoPartida= compararJugadas();
        alert(resultadoPartida);
        console.log(resultadoPartida);

      if (resultadoPartida.includes("Ganaste")){
          puntajes.usuario ++;
      }else if (resultadoPartida.includes("perdiste")){
          puntajes.computadora ++;
      }else{
        puntajes.empates ++;
          //puntajes.usuario++;
          //puntajes.computadora++;
      }

    alert("El puntaje es: Usuario: " + puntajes.usuario + " VS Computadora: " + puntajes.computadora );

    }

    if (puntajes.usuario == 3) {
        alert("Por fin ganaste!!")
      
    } else {
        alert("LOOOSEER!!")
    }

}

const mensajeFinalResultado = mostrarResultado();
console.log(mensajeFinalResultado);
