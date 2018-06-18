

EventDispatcher = function(target){
    var _self = this;
    var _eventListenerList = {};
    var _target = target;

    this.addEventListener = function(type, listener){
        if(null == type || null == listener) {
            // TODO chequear que type sea String y que listener sea function
            //Early return
            throw new Error("El type y el listener deben ser distinto de null");
            return;
        }

        // Buscamos la referencia de la lista con el nombre del evento
        var listenerList = _eventListenerList[type];
        //Sino existe creamos un array
        if(null == listenerList){
            listenerList = _eventListenerList[type] = [];
        }

        listenerList.push(listener);
    }

    this.removeEventListener = function(type, listenerToRemove){
        if(null == type || null == listener) {
            // TODO chequear que type sea String y que listenerToRemove sea function
            //Early return
            throw new Error("El type y el listener deben ser distinto de null");
            return;
        }

        var listenerList = _eventListenerList[type];
        // Sino existe la lista, devolver null
        if(null == listenerList){
            //Early return
            return listenerList;
        }

        var listner;
        //Por cada listener de type
        var length = listenerList.length;
        for(var index= 0; index < length; index++){
            //Chequear si listener es igual a listenerToRemove
            listner = _eventListenerList[index];
            if(listner == listenerToRemove){
                // Si es igual, removerlo del array
                listenerList.splice(index, 1);
                //devolver el elemento removido
                return listenerToRemove;
            }
        }
    }

    this.dispatchEvent = function(type, data){
        if(null == type){
            throw new Error("El type debe ser distinto de null");
        }
        
        var event = {
                        type:type
                        ,target:_target
                        ,data:data
                    }

        var listenerList = _eventListenerList[type];
        // Sino existe la lista, terminar
        if(null == listenerList){
            //Early return
            return
        }

        var listener;
        //Por cada listener de type
        var length = listenerList.length;
        for(var index= 0; index < length; index++){
            //Llamar a listener y pasarle a event
            listener = listenerList[index];
            listener.apply(null, [event]);
        }
    }

}