

IndexManager = function(){
    var _self = this;
    _index = 0;
    _length = 0;
    _lastIndex = 0;
    var _eventDispatcher = new EventDispatcher(this);

    var CHANGE  = "change";

    this.isLoop = false;

    this.prev = function(){
        //Obtenemos el previo
        var prevIndex = _index-1;
        //Si esta en rango asignamos
        if(prevIndex > -1){
            _index = prevIndex;
            dispatchEvent();
        }else if(_self.isLoop){
            //Sino esta en rango y es loop va a al ùltimo
            _index = _lastIndex;
            dispatchEvent();
        }
    }

    this.next = function(){
        //Obtenemos el previo
        var nextIndex = _index+1;
        //Si esta en rango asignamos
        if(nextIndex < _length){
            _index = nextIndex;
            dispatchEvent();
        }else if(_self.isLoop){
            //Sino esta en rango y es loop va a al ùltimo
            _index = 0;
            dispatchEvent();
        }
    }

    this.setIndex = function(value){
        if(isNumber(value)){
            _index = value;
        }
    }

    this.getIndex = function(){
        return _index;
    }

    this.setLength = function(value){
        if(isNumber(value)){
            _length = value;
            _lastIndex = _length-1;
        }
    }

    this.getLength = function(){
        return _length;
    }

    this.addEventListener = function(type, listener){
        _eventDispatcher.addEventListener(type, listener);
    }

    this.removeEventListener = function(type, listener){
        _eventDispatcher.removeEventListener(type, listener);
    }

    var dispatchEvent = function(){
        var data = {
             index  : _index
            ,length : _length
        }
        _eventDispatcher.dispatchEvent(CHANGE, data);
    }
}

