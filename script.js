// 1er ENTREGA: algoritmo condicional, algoritmo de ciclo, simulador interactivo


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


