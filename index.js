//lekcja1
console.log("Szymon")

let a;

console.log(a)

const b = 10;

a = 20;

console.log(a)

const zmienna = 4 // typ numeryczny
const zmienna1 = 4.6  // typ numeryczny 
const zmienna2 = "4"  // typ string
const zmienna3 = "literki" // typ string 
const zmienna4 = true // typ boolean
const zmienna5 = false // typ boolean

const obj = {
    zmienna1: 1.2,
    zmienna: 4,
    zmienna2:"4",
    zmienna3:"literki",
    zmienna4:true,
    zmienna5:false,
    zmiennaObjektowa: zmienna1,
    zmiennaObj: {

    }
}
const h3 = {
    id:"wyswietlanie",
    innerHTML:"",
}

console.log(obj) // bezpośrednie odwołanie do zmiennej która jest obiektem w tym przypadku
console.log(obj.zmienna3) // odpowałnie się od zmiennej przez rodzica (obj)
console.log(obj.zmiennaObjektowa) // odpowałnie się od zmiennej przez rodzica (obj)

obj.zmienna1 = 10
console.log(obj)
//obj = {}
//console.log(obj)  // zwaraca błąd ponieważ obj jest zmienną const a tej się nie zmienia, natomiast zmienna1 w obj jest letem wiec mozemy ją modyfikować

obj["zmienna1"] // wybieranie zmiennej1






