function crearMenu ( lista  ){
    //crear ul

    //iterar un array
    var length = lista.length;
    var item;
    var ul= document.createElement("ul")
    var li;
    var a;
    for(var index = 0; index < length; index++){
        
        //por cada elemento
        //crea li
        a = document.createElement("a");
        li = document.createElement("li");
        //obtener valor item
        item = lista[index];
        //asignar el valor del item al li
        li.appendChild(a);
        a.innerHTML = item.label;
        if (item.href != undefined){
            a.href = item.href;
        };
        //agregar al ul
        ul.appendChild(li);
    }    
    //devolver ul
    return ul;
}

var menuGenero  = [
                 {label:"Power Metal"}
                ,{label:"Death Metal"}
                ,{label:"Folk Metal"}
            ];

var myObject ={};
var menuBandas0 = [
                 {label:"Sonata Arctica"
                  ,href:"intentojs.html"}
                ,{label:"Gamma Ray"
                  ,href:"intentojs.html"}
                ,{label:"Rhapsody"
                  ,href:"intentojs.html"}
            ];


var menuBandas1 = [
                 {label:"Death"
                 ,href:"intentojs.html"}
                ,{label:"Cannibal Corpse"
                ,href:"intentojs.html"}
                ,{label:"Dying Fetus"
                ,href:"intentojs.html"}
            ];


var menuBandas2 = [
                 {label:"Korpiklaani"
                 ,href:"intentojs.html"}
                ,{label:"Arkona"
                ,href:"intentojs.html"}
                ,{label: "Narjahanam"
                ,href:"intentojs.html"}
            ];



var menuUl= crearMenu(menuGenero);
var menu = document.getElementById("section1");
menu.appendChild(menuUl);

/*
var submenu0 = menuUl.children[0];
console.log(submenu0);
var subUl =crearMenu (menuBandas0);
submenu0.appendChild(subUl);


var submenu2 = menuUl.children[2];
console.log(submenu2);
var subUl =crearMenu (menuBandas2);
submenu2.appendChild(subUl);
*/
var a;
var li;
var nuevalista = [menuBandas0,menuBandas1,menuBandas2];
var length = nuevalista.length;
var submenu;
//por c/ array de nuevalista
for(var index = 0 ; index < length;  index++ ) {

    //obtener el li
    var submenu = menuUl.children[index];
    console.log(submenu);
    //crear ul con array de bandas
    var subUl =crearMenu (nuevalista[index]);
    //agregar el ul al li
    submenu.appendChild(subUl);
}


