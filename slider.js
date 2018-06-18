


//Mueve al UL en base a un index
function mover(index){
    //la posicion es igual a multiplicar: index * liWidth y hacerlo negativo
    ul.style.marginLeft = -(index*liWidth)+"px";
}

var index = 0;
function indexHandler(){
    index ++;
    if(index >= totalLi){
        index = 0;
    }
}
/*
setInterval(function(){
    indexHandler();
    mover(index);
}, 1000);
*/
// Creador de li
var imgCreator = function (url){
    var img = document.createElement("img");
    // Asignarle el url
    img.src = url;
    img.style.width = "auto";
    img.style.height = "auto";
   return img;

}

// Crear el Array
var urlImageList = [
    "img/concierto1.jpg"
    ,"img/concierto2.jpg"
    ,"img/concierto3.jpg"
]

function Slider(){
    "use-strict"
    var _self = this;
    var _totalSlides = 0;
    var _slideWidth  = 300;
    var _slideHeight = 250;
    var _secondsDuration = 0.7;
    var _currentIndex = 0;

    // Crear el container
    var _container = document.createElement("section");
    // Crear el UL
    var _ul = document.createElement("ul");

        _container.appendChild(_ul);

    this.setSlideSize = function(width, height){
        if(isNumber(width)){
            _slideWidth = width;
        }

        if(isNumber(height)){
            _slideHeight = height;
        }

        updateContainer();
    }

    this.add = function(element){
        if(null == element || typeof element != "object"){
            //Early return
            return false;
        }
        //mantenemos conteo de elementos
        _totalSlides++;

        // Crear el li
        var li = document.createElement("li");
        //Agregar los estilos al li
            li.style = "width:"+_slideWidth+"px;height:"+_slideHeight+"px;float:left;";
        // Agregar el img al li
        li.appendChild(element);

        _ul.appendChild(li);

        updateContainer();
    }

    this.animateByIndex = function(index) {
        if(isNumber(index) && _totalSlides > 0){
            // el index estara entre 0 y el total menos 1
            _currentIndex = Math.max(Math.min(index, _totalSlides-1),0);
            _ul.style.marginLeft = -(_slideWidth*_currentIndex)+"px";
        }
    }

    this.getContainer = function(){
        return _container;
    }

    this.setAnimationSeconds = function(seconds){
        if(isNumber(seconds)){
            _secondsDuration = seconds;
            updateContainer();
        }
    }

    this.next = function(){
        _self.animateByIndex(_currentIndex+1);
    }

    this.prev = function(){
        _self.animateByIndex(_currentIndex-1);
    }

    var updateContainer = function(){
        _container.style = "width:" + _slideWidth + "px;height:"+_slideHeight+"px;overflow:hidden;";

        // multiplicar el ancho por la cantidad de slides
        var containerWidth = _totalSlides * _slideWidth;
        // asignar estilos al ul
        _ul.style = "width:"+ containerWidth +"px;list-style-type:none;transition:margin-left "+ _secondsDuration +"s;";
    }
}


var slider = new Slider();

var img1 = imgCreator(urlImageList[0]);
var img2 = imgCreator(urlImageList[1]);
var img3 = imgCreator(urlImageList[2]);

var img = imgCreator("https://ironmaiden.com/media/tour/319030.jpg");
slider.add(img)

document.body.appendChild(slider.getContainer());

slider.add(img1);
slider.add(img2);
slider.add(img3);

