var add = function(x){
    var sum = 1;
    var tmp = function(x){
        sum = sum + x;
        return tmp;
    }
    tmp.toString = function(){
        return sum;
    }
    return tmp;
}
alert(add(1)(2)(3));
