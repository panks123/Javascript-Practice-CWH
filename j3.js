// type conversion in js

let var1=30;
console.log(var1);
console.log(typeof var1)
var1=String(30)
console.log(var1)
console.log(typeof var1)


var1=String(true)
console.log(var1)
console.log(typeof var1)

var3=String([1,2,3,4,5])
console.log(var3)
console.log(typeof var3)

var4 =String(new Date())
console.log(var4)
console.log(typeof var4)


var5="90"
var5=Number(var5)
console.log(var5)
console.log(typeof var5)

var6='34'
var6=parseInt(var6)
console.log(var6)
console.log(typeof var6)

var7='34.33'
var7=parseInt(var7)
console.log(var7)
console.log(typeof var7)

var8='34.33'
var8=parseFloat(var8)
console.log(var8)
console.log(typeof var8)

// type coersion

var9="90"
var10=90
console.log(var9+var10)

console.log(Number(var9)+var10)