


const bienvenida = () =>{
    alert("Bienvenidos al criadero mas profesional de argentina")
}

bienvenida();


const verPerros = () =>{
    let confirmacion = prompt("¿Queres conocer a la camada disponible?")
    if(confirmacion){
        const perros = ["Limon", "Maggie", "Tango", "Ronnie", "Victoria"];

        for(let i=0; i<perros.length;i++){
            alert(perros[i])
        }

        let respuesta = prompt("¿Cual de todos te gusto mas?")
        alert(respuesta + " esta disponible! Por favor llena nuestro formulario para iniciar los tramites de adopcion")    

    }
}

verPerros();

// const form = document.querySelector("#form");
// form.addEventListener("submit", function(e){

// })


let botonVerMas = document.createElement("button");
let botonTexto = document.createTextNode("Conocer camada disponible");
botonVerMas.appendChild(botonTexto);
document.body.appendChild(botonVerMas);

botonVerMas.addEventListener("click", function(){
alert("No hay camada disponible aun");    
})


// CARRITO
const camadaPerros = [
    {
        id: 1,
        nombre: 'Limon',
        sexo: "macho",
        imagen: 'id1.jpg'
    },
    {
        id: 2,
        nombre: 'Maggie',
        sexo: "hembra",
        imagen: 'id2.jpg'
    },
    {
        id: 3,
        nombre: 'Tango',
        sexo: "macho",
        imagen: 'id3.jpg'
    },
    {
        id: 4,
        nombre: 'Ronnie',
        sexo: "macho",
        imagen: 'id4.jpg'
    },
    {
        id: 4,
        nombre: 'Victoria',
        sexo: "hembra",
        imagen: 'id5.jpg'
    }

];




let carrito = [];
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');


//FUNCION PARA VACIAR EL CARRITO


function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    //ESTA FUNCION AUN NO LA CREO.
 }
 