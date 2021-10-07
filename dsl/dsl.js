x = ( a  ?? 10 )
console.log( "Value is " + x )

b = { x : 10, y : 20 , nested:  [0,1,2,3 ] }
console.log( "b.x or ? is : " + (b.x ?? "?") )
console.log( "b.z or ? is : " + (b.z ?? "?") )
console.log( "b.nested[10] or ? is : " + (b.nested[1] ?? "?") )
console.log( "b.nested[10] or ? is : " + (b.nested[10] ?? "?") )

