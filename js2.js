//lekcja2
const array = [99, "silny",3,6,10,true]

const arrayObj = { 0:99, 1:"silny", 2:3, 3:6, 4:10,5:true}

console.log(array[1])
console.log(array['1']) // to samo, ale lepiej tak nie pisać, '' na nic w tym przypadku nie wplywa

array[2] = "hello" // zmiana wartości z miejca 2 na hello

console.log(5 === 5) // prawda
console.log(5 === '5') // fałsz
console.log(5 == '5') // prawda
console.log(0 == false) // prawda
console.log(1 == true) // prawda
console.log(1 === false) // fałsz
console.log('1' == true) // prawda
console.log('0' == false) // prawda
console.log(undefined == false) // fałsz
console.log(undefined == true) // fałsz
console.log(undefined == undefined) // prawda
console.log(undefined === undefined) // prawda
console.log(null == false) // fałsz
console.log(null == 0) // fałsz
console.log (null == undefined) // prawda ?xD
console.log (null === undefined) // fałsz
console.log(null == 'null') //fałsz

console.log(5 !== 5) // fałsz
console.log(5 != '5') // fałsz
console.log(5 !== '5') // prawda
console.log(7 !== 8) // prawda
console.log(7 != 8) // prawda
console.log(7 !== '8') // prawda
console.log(0 !== false) // prawda
console.log(0 != false) // fałsz 
console.log(0 != undefined) // prawda
console.log(null != undefined) // fałsz
console.log(null !== undefined) // prawda

console.log(5 === '5' || 5 != '5') // fałsz
console.log(null != 0  && 5 == '5') // prawda
console.log(!5) // fałsz
console.log(!!5) // prawda
console.log(!5 === false) // prawda
console.log(5 == true ) // fałsz
console.log(true === 'true') // fałsz
console.log(!!'true' === true)  //prawda
console.log(!!undefined) // fałsz
console.log(!!'false' === false) // fałsz
console.log(!!'true') // prawda
console.log(!undefined) // prawda
console.log(!!null) // fałsz
console.log(!!'false') // prawda
console.log(!!'') // fałsz

console.log(5 > 0) // prawda
console.log(0 > 5) // fałsz
console.log(0 >= 5) // fałsz
console.log(5 <= 5) // prawda
console.log('5' >= 0) // prawda
console.log('czekaj' <= 'xd') // prawda
console.log( 'xde' <= "xdd") // fałsz ( e ma większą wartość niż d)
console.log( 'xdex' <= "xdda") // fałsz ( e jest wieksze od d - dlatego fałsz i nie sprawdzamy dalszych znaków)
console.log ('a' > 'A') // prawda (małe a ma większą wartość niż duże A)
console.log('a' > '5') // prawda (litery mają mniejsze wartości niż każna litera)
console.log('a' > 5 ) // a jest zamieniane na NaN(not a number) -> false ( z porównywania NaN z liczbą wyjdzie fałsz)
console.log(true > false) // prawda

const zmienna9 = null

const zmiennaNotNull = zmienna9 ?? '100'
console.log(zmiennaNotNull)




