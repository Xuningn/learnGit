function create1(pro) {
    console.log("pro:", pro);
    return function(obj1, obj2) {
        console.log(obj1 + "--" + obj2);
        return obj1 + obj2;
    }
}

var c1 = create1("pro");
c1(1,2);
console.log(c1(2,2));