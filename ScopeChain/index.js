function a() {
    console.log(b)
    var x = 12
    c() // b will get printed as 10
    function c() {
        console.log(b) //b will printed as 10
    }
}


var b = 10;
a();
console.log(x);