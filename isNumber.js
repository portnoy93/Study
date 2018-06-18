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