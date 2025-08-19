// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let pendientes = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value;

    if (nombre) {
        amigos.push(nombre);
        pendientes = [...amigos]; // actualizar tambie la lista de pendientes
        inputAmigo.value = '';
        mostrarAmigos();
        inputAmigo.focus();
        // colocar el puntuero en el cuadro de inicio depues de esribir el nombre de la persona
        inputAmigo.focus();
  } else {
      alert('por favor, inserte el nombre'); 
  }
 }

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    const resultadoDiv = document.getElementById('resultadoSorteo');
    const pendientesDiv = document.getElementById('pendientes')

    if (resultadoDiv) resultadoDiv.innerHTML = '';
    if (pendientesDiv) pendientesDiv.innerHTML = '';

 lista.style.display = 'block';
 lista.innerHTML = '';

 for (let i = 0; i < amigos.length; i++) {
    const nuevoAamigo = document.createElement('li');
    nuevoAamigo.textContent = amigos[i];
    lista.appendChild(nuevoAamigo);
 }
}

function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const resultadoDiv = document.getElementById('resultado');
    const pendientesDiv = document.getElementById('pendientes')

    if (pendientes.length === 0) {
        if (resultadoDiv) {
            resultadoDiv.innerHTML = `<p> Todos los nombres fueron sorteados.</p>`;
        }
        if (pendientesDiv) pendientesDiv.innerHTML = '';
        return;
    }

    const indiceAletorio = Math.floor(Math.random() * pendientes.length);
    const amigoSorteado = pendientes[indiceAletorio];

    // eliminar de pendientes
    pendientes.splice(indiceAletorio, 1);

    lista.style.display = 'none';

    if (resultadoDiv) {
        resultadoDiv.innerHTML = `<p>🎁 El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;
    }

    //mostar pendientes
    if (pendientesDiv) {
        if (pendientes.length > 0) {
            pendientesDiv.innerHTML = `<p> Faltan por salir:</p><ul>${pendientes.map(n => `<li>${n}</li>`).join('')}</ul>`;
        } else {
            pendientesDiv.innerHTML = `<p>✅ Todos los nombres fueron sorteados.</p>`;
        }    
    }
}