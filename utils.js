// Dado un elemento, obtener si lista de clases
window.getClassListByElement = function(elemento) {
    // En base a un elemento
    // Obtener el className
    var className = elemento.className;

    // Convertir el className en un Array
    var listaClases = className.split(" ");

    // Crear un Array vacio
    var listaClasesFinal = [];
    
    // Recorrer listaClases y eliminar los espacios vacios.
    for(var index=0; index < listaClases.length; index++){
        //Obtener el valor de la clase
        var clase = listaClases[index];
        //si la clase es distinto de ""
        if(clase != ""){
            // Agregar clase a listaClasesFinal
            listaClasesFinal.push(clase);
        }
    }
    // Si la listaClasesFinal tiene elementos
    if(listaClasesFinal.length > 0){
        // Convertir la lista en String
        className = listaClasesFinal.join(" ");
        // Asignar el String a className del elemento
        elemento.className = className;
    }
        
    // Devolver listaClasesFinal
    return listaClasesFinal;
}

// Dado un String con una lista de clases,
// asignarlas a un elemento
window.addClassesToElement = function(classes, elemento){
    // Si la clase es null, frenar la funcion
    if(null == classes){
        //Retorno temprano
        // early return
        return;
    }

    // Si clase no es un String frenar la funcion
    if(typeof classes != "string"){
        //Retorno temprano
        // early return
        return;
    }

    // Si el elemento es null, frenar la función
    if(null == elemento){
         //Retorno temprano
        // early return
        return;
    }

    // Tomar la lista de clases del elemento
    var clasesLista = classes.split(" ");
    
    // LLamar a addClassToElement por cada clase de la lista
    var isNotInside = true;
    for(var index=0; index < clasesLista.length;  index++){
        var clase = clasesLista[index];
        addClassToElement(clase, elemento);
    }
}

// Dada una clase y un elemento, agregar la clase al elemento
window.addClassToElement = function(clase, elemento){
    // Si la clase es null, frenar la funcion
    if(null == clase){
        //Retorno temprano
        // early return
        return;
    }

    // Si clase no es un String frenar la funcion
    if(typeof clase != "string"){
        //Retorno temprano
        // early return
        return;
    }

    // Si la clase tiene espacios vacios, frenar la funcion
    if(clase.indexOf(" ") > -1){
        //Retorno temprano
        // early return
        return;
    }

    // Si el elemento es null, frenar la función
    if(null == elemento){
         //Retorno temprano
        // early return
        return;
    }

    // Tomar la lista de clases del elemento
    var clasesLista = getClassListByElement(elemento);
    
    // Si la clase no está en la lista, agregarla
    var isNotInside = true;
    for(var index=0; index < clasesLista.length;  index++){
        var classList = clasesLista[index];
        if(classList == clase){
            isNotInside = false;
            break;
        }
    }

    if(isNotInside){
        clasesLista.push(clase);
        elemento.className = clasesLista.join(" ");
    }
}

// Dada una clase y un elemento,  remueve la clase del elemento
window.removeClassFromElement = function(clase, elemento){
    // Si la clase es null, frenar la funcion
    if(null == clase){
        //Retorno temprano
        // early return
        return;
    }

    // Si clase no es un String frenar la funcion
    if(typeof clase != "string"){
        //Retorno temprano
        // early return
        return;
    }

    // Si la clase tiene espacios vacios, frenar la funcion
    if(clase.indexOf(" ") > -1){
        //Retorno temprano
        // early return
        return;
    }

    // Si el elemento es null, frenar la función
    if(null == elemento){
         //Retorno temprano
        // early return
        return;
    }

    // Tomar la lista de clases del elemento
    var clasesLista = getClassListByElement(elemento);
    
    // Si la clase está en la lista, removerla
    for(var index=0; index < clasesLista.length;  index++){
        var classList = clasesLista[index];
        if(classList == clase){
            clasesLista.splice(index,  1);
            break;
        }
    }

    // Convertir la lista en String
    elemento.className = clasesLista.join(" ");
}

window.isNumber = function(number){
    var isNull   = null == number;
    var isNotN   = isNaN(number);
    var isString;
    if(!isNull){
        isString = number.length != undefined;
    }
    var isDefenetlyNotANumber = isNull|| isNotN  ||  isString;
    if( isDefenetlyNotANumber){
        return false;
    }
    return true;
}