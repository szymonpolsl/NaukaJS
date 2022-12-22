function przyklad(){
    const siema = 'xd'
    return siema
}
console.log(przyklad())

function yay(x, y) {
    return x > y
}

const z = yay(2,4)
console.log(z)

const funcObj = {
    f1: function(){
        return 0
    }
}
console.log(funcObj.f1())
console.log()
funcObj.f1()

// przykłady z returnem, wyświetla kiedy jest return, a nie wyświetla jak go nie ma 
const returnOfConsoleLog = console.log('4')

console.log('wartość z console loga: ', returnOfConsoleLog)

function funcVoid(arg) {
    const babka = arg
    return babka
}
const returnFuncVoid = funcVoid('kkk')
console.log('wartość z funcVoid: ', returnFuncVoid)


// przykład PureFunction

const table = [ 'zero', 'jeden', '2', true, 4, null]

const table1 = [0,'1',undefined,false, 4]

function wybierz(table_name,index) {
    
    const wynik = table_name[index]
    return wynik
}

const p = wybierz(table, 3)
console.log(p)


function oblicz(a,b){
    const suma = a + b
    console.log('a wynosi:', a, ' b wynosi:', b, ' suma wynosi:', suma) // przy użyciu ,
    console.log('a wynosi: '+ a + ' b wynosi: '+ b + ' suma wynosi: '+ suma) // przy wykorzysatniu znaków +
    console.log(`a wynosi: ${a} b wynosi: ${b} suma wynosi: ${suma} `) // przy użyciu ${}
}
oblicz(1,2)

console.log("podstawowa tabela: ", table)
function zmiana_w_tabeli(tablee,index1,wartosc){
    const zmiana = [...tablee]
    zmiana[index1] = wartosc
    return zmiana
}
console.log(zmiana_w_tabeli(table,2,'zmieniło?'))
console.log("tabela po zmianie:", table)

function jakakolwiek(...arg){
    console.log(arg)
}
jakakolwiek(1,2,'cos')

jakakolwiek(...table1, 1) // zdekonstruowana tabela
jakakolwiek(table1,1) //nie zdekonstruowana tabela




 const objekt = {
    jedynka: 1,
    dwojeczka: 2,
    texcik: 'siema',
    nw: undefined,
}
console.log('przed modyfikacją:',objekt)
function obiektowa (obj,objz,nowa){
    const zmiena = {...obj}
    zmiena[objz] = nowa
    return zmiena
}
obiektowa(objekt,"nw",'nie wiem')
console.log('zwrot: ' ,obiektowa(objekt,"nw",'nie wiem'))
console.log('po wywołaniu funkcji: ', objekt)


function pureInPure (...arg1){                  // pure function mimo Math.max ( bo też jest czysta)
    return Math.max(...arg1)
}
console.log(pureInPure(0,245,123,463,314,43,2))