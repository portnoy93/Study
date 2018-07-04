

const productos = [];

var botAdd = document.getElementById("add");
var botUndo = document.getElementById("undo");


var ul = document.getElementById("listaProd");

function agregar(){
    var txtInput = document.getElementById("texto");
    var prodd = txtInput.value;
    var textLength = prodd.length;
    console.log(textLength)
    if(textLength >= 4){
        productos.push(prodd);
    }

    console.log(productos)
    mostrar()
}

function mostrar(){
    var acumula ="";
    for(i in productos){
       var acumula = acumula+ `<li class="lista">${productos[i]}</li>` ;

    }
    ul.innerHTML = acumula;
}

botAdd.addEventListener("click",agregar);