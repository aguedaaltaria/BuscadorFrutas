// document.addEventListener("keyup", a => {
//     if (a.target.matches("#buscador")) {
//         document.querySelectorAll(".articulo").forEach(fruta => {
//             fruta.textContent.toLowerCase().includes(a.target.value.toLowerCase())
//             ?fruta.classList.remove("filtro")
//             :fruta.classList.add("filtro")
//         })
//     }
// })

/////////////////////////

const listaArticulos = document.getElementById('listaArticulos'); 
let inputAdd = document.getElementById('addFruta');
let inputBuscar = document.getElementById('buscador');

function addFruta() {
    let valueAdd = inputAdd.value;
    listaArticulos.innerHTML += `<li class="articulo">${valueAdd}</li>`;
};

function borrarFruta() {
    listaArticulos.querySelectorAll('li')[listaArticulos.querySelectorAll('li').length - 1].remove();
};

function filtrarFrutas() {
    const textoBuscar = inputBuscar.value.toLowerCase();
    const frutas = listaArticulos.querySelectorAll('li');

    for (const fruta of frutas) {
        if (fruta.textContent.toLowerCase().includes(textoBuscar)) {
            fruta.style.display = 'block';
        } else {
            fruta.style.display = 'none';
        }
    }
}

inputBuscar.addEventListener("keypress", function funFruta(event) {
    if (event.key === "Enter") {
        filtrarFrutas();
    }
});