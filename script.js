


const bienvenida = () =>{
    alert("Bienvenidos al criadero mas profesional de argentina")
}

bienvenida();


const verPerros = () =>{
    let confirmacion = confirm("¿Queres conocer a la camada disponible?")
    if(confirmacion){
        const perros = ["Limon", "Maggie", "Tango", "Ronnie", "Victoria"];

        for(let i=0; i<perros.length;i++){
            alert(perros[i])
        }

        let respuesta = prompt("¿Cual de todos te gusto mas?")
        alert(respuesta + " esta disponible! Por favor llena nuestro formulario para iniciar los tramites de adopcion")    

    }
}

// verPerros();

// const form = document.querySelector("#form");
// form.addEventListener("submit", function(e){

// })


// let botonVerMas = document.createElement("button");
// let botonTexto = document.createTextNode("Conocer camada disponible");
// botonVerMas.appendChild(botonTexto);
// document.body.appendChild(botonVerMas);

// botonVerMas.addEventListener("click", function(){
// alert("No hay camada disponible aun");    
// })


// CARRITO


const containerPerros = document.createElement("div");
const perrosContainer = document.querySelector("#perros-container");
perrosContainer.addEventListener("click",renderizarPerros);
    // e.preventDefault();
    


function renderizarPerros(camadaPerros) {
    camadaPerros.forEach(perro => {
        containerPerros.innerHTML += `<div class="card">
        <h5 class="card-title">${perro.nombre}</h5>
        <p class="card-text">$<span>${perro.precio}</span></p>
        <img src ="${perro.imagen}"></img>
        <button type="button" class="btn-comprar">Añadir al carrito</button>
    </div>
    `
});
}      




// let carrito = [];
// const DOMitems = document.querySelector('#items');
// const DOMcarrito = document.querySelector('#carrito');
// const DOMtotal = document.querySelector('#total');
// const DOMbotonVaciar = document.querySelector('#boton-vaciar');


//FUNCION PARA VACIAR EL CARRITO


// function vaciarCarrito() {
//     // Limpiamos los productos guardados
//     carrito = [];
//     // Renderizamos los cambios
//     renderizarCarrito();
//     //ESTA FUNCION AUN NO LA CREO.
//  }



 // MODAL FORMULARIO
const btnLanzarModal = document.querySelector("#lanzar-modal")
const btnOcultarModal = document.querySelector("#ocultar-modal")

const contModal = document.querySelector(".contenedor-modal")


const nombreInput = document.querySelector("#nombre")
const cachorroInput = document.querySelector("#cachorro")

btnLanzarModal.addEventListener("click", (e) =>{
    e.preventDefault();
    contModal.classList.add("mostrar")
})

btnOcultarModal.addEventListener("click", (e) =>{
    e.preventDefault();
    contModal.classList.remove("mostrar");

    const adoptante = document.querySelector(".contenedor");

    const aNombre = document.createElement("p");
    aNombre.textContent = nombreInput.value;
    const pCachorro = document.createElement("p");
    pCachorro.textContent +="Has elgido adoptar a " + cachorroInput.value;
    
    adoptante.appendChild(aNombre);
    adoptante.appendChild(pCachorro);

});

 