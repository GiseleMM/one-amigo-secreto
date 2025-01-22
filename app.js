// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const ulAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

let amigos = [];

function agregarAmigo() {
  if (inputAmigo && inputAmigo.value && inputAmigo.value.trim().length > 0) {
    console.log(inputAmigo.value);
    if (repetidoAmigo(inputAmigo.value.trim())) {
      //esta repetido
      console.log("No se puede repetir amigo");
      mensajeError("👀 Ya se encuentra en la lista de amigos, verifique por favor!");
    } else {
      //no esta repetido
      amigos.push(inputAmigo.value.trim());
      agregarALista();
    }
  }else{
    mensajeError(" No se puede agregar espacio en blanco ❗");
  }
}
function repetidoAmigo(amigo) {
  return amigo && amigos.includes(amigo);
}
function agregarALista() {
  //limpio contenedor de amigos
  vaciarContenedor(ulAmigos);
  ulAmigos.appendChild(crearLi(amigos));
}
function crearLi(datos) {
  const fragmento = new DocumentFragment();
  datos.forEach((element) => {
    const li = document.createElement("LI");
    li.innerHTML = "👉 " + element;
    fragmento.appendChild(li);
  });
  return fragmento;
}
function vaciarContenedor(padre) {
  while (padre.firstChild) {
    padre.removeChild(padre.firstChild);
  }
}
function sortearAmigo() {
  if (amigos.length > 1) {
    let amigo = getRandomInt(0, amigos.length);
    console.log(amigo);
    ulResultado.innerHTML = "🙌 " + amigos[amigo];
  } else {
    //no hay amigos
    mensajeError("😩 debe haber mas de un amigo para llevar a cabo el sorteo");
  }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
 function  mensajeError(mensaje)
  {
    ulResultado.innerHTML=mensaje;

  }
  //limpiar mensaje cada teclea en el input de amigos
  inputAmigo.addEventListener("input",()=>{
    ulResultado.innerHTML="";
    })