const x = null
//dobre
if(true){
    const x = 5
    console.log("działa", x)
}
if(false === false){
    const x = 10
    console.log("nie działa", x)
}

console.log('ostatni x: ', x)
//dobre
function show(a){
    if (a){
        console.log("wynik 1: ", 1 )
        return
    }
    console.log('wynik 0: ', 0)
}
show(x)
// złe
function show(a){
    if (a){
        console.log("wunik 1: ", 1 )
    } else{
        console.log('wynik 0: ', 0)
    }
}
show(x)

function lights(light){
    if (light === 'green'){
        console.log('go ahead')
    } else if (light === 'red'){
        console.log('stop')
    } else if (light === 'yellow'){
        console.log('be ready')
    } 
    else{
        console.log('invalid color')
    }
}

lights('yellow')
lights('red')
lights('green')
lights(0)

function pelnoletni(a){
    if (typeof (a) !== 'number'){
        console.log(typeof(a))
        console.log('nieprawidłowa wartość')
        return
    }
    if (a >= 18){
        console.log("pełnoletni " )
    }
    else if (a < 18){
    console.log('niepełnoletni')
    }
}
pelnoletni(5)
pelnoletni('hello')


console.log('typy') //typy


console.log(typeof(2)) //number
console.log(typeof('hello')) //string
console.log(typeof(true)) //boolean
console.log(typeof(undefined)) //undefined
console.log(typeof(null)) // !object!
console.log(typeof(             //object
    {
        a: 'one'
    }
)) 
console.log(typeof([1,2]))      //object
console.log(typeof(function(){}))       //function

console.log(typeof(NaN)) //number


function switchlight (light) {
    switch(light){
        case 'green':
            console.log('go ahead')
            break
        case 'yelllow':
            console.log('be ready')
            break
        case 'red':
            console.log('stop')
            break
        default:
            console.log('invalid color')
    }       
}
switchlight('red')
switchlight(5)

function switchPeloletni(age){
    if (typeof(age) !== 'number'){
        console.log ('invalid age')
        return
    }
    switch(age >= 18 ){
        case true:
            console.log('pełnoletni')
            break
        default:
            console.log('niepełnoletni')
    }
}

switchPeloletni(17)

switchPeloletni(19)

switchPeloletni('a')


let xxl = null // tak samo undifined czyli wychodzi no

//if(xxl){
//    console.log('jest')
//} else{
 //   console.log('nie jest')
//}

xxl ? console.log('yes') : console.log ('no')



function foo(...x) {
    const boo = {}
    if (x.length > 1) {
      boo.output = 'Too many data'
      return boo
    }
  
    switch(typeof(x[0])) {
      case 'number':
        boo.output = 'Digits'
        break
      case 'string':
        boo.output = 'Letters'
        break
      default:
        boo.output = 'Inproper value'
    }
    

    return boo
  }
  console.log(foo(1))
  console.log(foo('a'))
  console.log(foo(undefined))
  console.log(foo(1,2,3,4)) 


