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
        console.log(item);
        //asignar el valor del item al li
        li.appendChild(a);
        a.innerHTML=item;
        //agregar al ul
        ul.appendChild(li);
    }    
    //devolver ul
    return ul;
}

var menuGenero  = ["Power Metal","Death Metal","Folk Metal"];
var menuBandas0 = ["Sonata Arctica","Gamma Ray","Rhapsody"];
var menuBandas1 = ["Death","Cannibal Corpse","Dying Fetus"];
var menuBandas2 = ["Korpiklaani","Arkona","Narjahanam"];

var menuUl= crearMenu(menuGenero);
var menu = document.getElementById("section1");
menu.appendChild(menuUl);

var submenu0 = menuUl.children[0];
console.log(submenu0);
var subUl =crearMenu (menuBandas0);
submenu0.appendChild(subUl);

var submenu1 = menuUl.children[1];
console.log(submenu1);
var subUl =crearMenu (menuBandas1);
submenu1.appendChild(subUl);

var submenu2 = menuUl.children[2];
console.log(submenu2);
var subUl =crearMenu (menuBandas2);
submenu2.appendChild(subUl);

