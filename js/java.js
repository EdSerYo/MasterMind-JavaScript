const btn0 = document.getElementById("boton1")
const btn1 = document.getElementById("boton2")
const btn2 = document.getElementById("boton3")
const btn3 = document.getElementById("boton4")
const btn4 = document.getElementById("boton5")
const btn5 = document.getElementById("boton6")
const ganador = document.getElementById("ganador")
const perdedor = document.getElementById("perdedor")
const tbl = document.getElementsByTagName("tr")
const rst = document.querySelectorAll(".resultado")
const button = document.getElementsByTagName("button")
const colores = ["red", "blue", "yellow", "green", "brown", "gray"]

let fila = 0
let columna = 0
let rsp = [[]]
let sol = []


// funciones
function secreto(){
   
    lista = [0,1,2,3,4,5];
    lista = lista.sort(function() {return Math.random() - 0.5})
    for (let i = 0; i < 4; i++) {
       sol.push(lista[i])
    }
    console.log(sol)
}

function comprobar(){
    linea = 0
    cSitio = 0
    cFuera = 0
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i == j){
                if (rsp[fila][i] == sol[j]){
                    cSitio++
                }
            } else{
                if (rsp[fila][i] == sol[j]){
                    cFuera++
                }
            }
        }
    }
    let div = rst[fila].getElementsByTagName("div")
    let i = 0
    for (j = 0; j < cSitio; j++){
        div[i].style.backgroundColor='green'
        i++
    }
    for (j = 0; j < cFuera; j++){
        div[i].style.backgroundColor='red'
        i++
    }
    if (cSitio == 4){
        ganador.style.display = "block"
        button[0].style.display = "block"
    }
}
function botonPulsado(ev){
    color = colores[ev] 
    tbl[fila].getElementsByTagName("td")[columna].firstChild.style.backgroundColor = color
    tbl[fila].getElementsByTagName("td")[columna].firstChild.style.boxShadow = "inset 0px 0px 3px black"
    rsp[fila].push(ev)
    columna += 1;

    switch (ev) {
        case 0:
            btn0.removeEventListener("click", rojo, false)
            break;
        case 1:
            btn1.removeEventListener("click", azul, false)
            break;
        case 2:
            btn2.removeEventListener("click", amarillo, false)
            break;
        case 3:
            btn3.removeEventListener("click", verde, false)
            break;
        case 4:
            btn4.removeEventListener("click", marron, false)
            break;
        case 5:
            btn5.removeEventListener("click", gris, false)
            break;
    }
    
    if (columna == 4){
        comprobar()
        columna = 0;
        fila += 1;
        rsp.push([])
        aEscuchar()
    }
    if (fila == tbl.length){
        perdedor.style.display = "block"
        button[0].style.display = "block"
    }
}

function rojo(){
    botonPulsado(0)
}
function azul(){
    botonPulsado(1)
}
function amarillo(){
    botonPulsado(2)
}
function verde(){
    botonPulsado(3)
}
function marron(){
    botonPulsado(4)
}
function gris(){
    botonPulsado(5)
}


function aEscuchar(){
    btn0.addEventListener("click", rojo, false)
    btn1.addEventListener("click", azul, false)
    btn2.addEventListener("click", amarillo, false)
    btn3.addEventListener("click", verde, false)
    btn4.addEventListener("click", marron, false)
    btn5.addEventListener("click", gris, false)
}

function formatearTabla(){
    for (let index = 0; index < tbl.length; index++) {

        tbl[index].getElementsByTagName("td")[0].style.borderTopLeftRadius = "10px"
        tbl[index].getElementsByTagName("td")[3].style.borderTopRightRadius = "10px"
        tbl[index].getElementsByTagName("td")[3].style.borderBottomRightRadius = "10px"
        tbl[index].getElementsByTagName("td")[0].style.borderBottomLeftRadius = "10px"

    }
}

secreto()
aEscuchar()
formatearTabla()
// escuchadores
