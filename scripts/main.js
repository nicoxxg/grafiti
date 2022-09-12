// 1- Que al hacer submit en el form se genere un div con clase "mensaje" y se anexe dentro de #wall

// 2- Si no existe, agregar un input de tipo texto al form y modificar el script para que ese texto se incluya en un párrafo adentro de cada nuevo .mensaje 
// 2.1- Evitar que el input quede vacío.

// 3- Si no existe, agregar un input de tipo color al form y modificar el script para que el texto del nuevo .mensaje sea del color seleccionado 

// 4- Agregar una X dentro de un span con clase "close" en cada .mensaje nuevo para agregar la funcionalidad de eliminar ese graffiti

// 5- Agregar un input de tipo checkbox al form y modificar el script para que el .mensaje tenga la clase .poster en lugar de .graffiti 

// BONUS- Al hacer submit, los inputs del formulario deben volver a los valores iniciales
/*
let wall = document.getElementById(`wall`)
let mensaje = document.getElementsByClassName(`mensaje`)
let submit = document.forms[0]
let texto = document.querySelector("input.type text")
var form =document.querySelector ("form")


form.addEventListener("submit", (x)=> (crearDiv (x)))

function crearDiv (x){

    x.preventDefault()

    //creo un div con contenido "hola"
    //div= document.createElement ('div')
    //div.classList.add('mensaje')

    var div= document.querySelector('div.mensaje')
    texto.innerHTML=``

    //agrego el div al wall
    var wall= document.querySelector("#wall")
    wall.appendChild(div)


    //console.log para verificr
    console.log (div)

}
*/
/*
let boton = document.querySelector("form")

boton.addEventListener("submit", function (event) {
    event.preventDefault()
    let texto = document.getElementById(`texto`).value;
    let div = document.createElement("div");
    div.classList.add("div");
    div.innerHTML =
    `
    <div class="mensaje poster">
        <span class="close">&times;</span>
        <p>
        ${texto}
        </p>
    </div>
    `
    let wall = document.getElementById("wall")
    wall.appendChild(div)
    boton.reset()
})
*/

const wall = document.getElementById(`wall`)

wall.addEventListener("click",(e)=>{
    if (e.target.classList.contains("close")){
        wall.removeChild(e.target.parentNode)
    }
})

const formulario = document.forms[0]
console.log([formulario]);
formulario.addEventListener(`submit`,(e)=>{
    e.preventDefault()
    let div = document.createElement(`div`)
    div.className = `mensaje`
    if (formulario[4].checked){
        div.classList.add(`poster`)
    }else{
        div.classList.add(`graffiti`)
    }

    div.innerHTML = `
                        <span class="close">&times;</span>
                            <p style="color: ${formulario[2].value};">
                            ${formulario[1].value}
                            </p>
                    `
                    
    wall.appendChild(div)
    formulario.reset()
})