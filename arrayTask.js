//wszystkie wyniki wyświetl po rozwiązaniu zadania przez console.log


//create newArray that is is made from arr1 = [3, -4, 10] and arr2 = [6, 7, -12], use concat method
arr1 = [3, -4, 10];
arr2 = [6, 7, -12];
const newArray =  arr1.concat(arr2)
console.log(newArray) 

//check if every element in newArray is number, use every method
const x = (element) => typeof(element) === "number"
console.log(newArray.every(x)) // true
 
//fill newArray's elements from 2 position to 4 position with "słoneczko" string, use fill method
newArray.fill("słoneczko",2,5);

//get index of first element in newArray that is lower than 0, use findIndex method
function checkZero(newArray){
    return newArray < 0;
}
console.log(newArray.findIndex(checkZero)) //1 bo 1 

const first_index = (element) => element < 0 
console.log(newArray.findIndex(first_index)) // 1 bo zmienna na 1 miejscu pasuje 
console.log(newArray.findIndex((element) => element < 0)) // funkcja anonimowa

//filter newArray from strings and odd numbers (only even numbers should be left), user filter method
const liczby = newArray.filter((a)=> typeof(a) !== "string" && a % 2 === 0)// tylko 1 zmienna 
console.log("podzielne przez 2", liczby)


//flat given array: wierdArray = [0, "wolf", [3, 0], ["ice", [["bear"]5, -20, "tiger"]]] to one array, use flat method
const wierdArray = [0, "wolf", [3, 0], ["ice", [["bear"],5, -20, "tiger"]]]
const newArray2 = wierdArray.flat(3);
console.log(newArray2)
//display all elements from wierdArray with their index, console.log(element, index), use forEach method
wierdArray.forEach((a,b) => console.log(a,b))

//find first element of string type in wierdArray, use find method
const liczba7 = wierdArray.find((a) => typeof(a) === "string")
console.log("pierwsza liczba wierdArray: ", liczba7 ) // pierwsza liczba 

//take second element from wierdArray and make an array from it, use from method
const liczba8 = Array.from(wierdArray[1])
console.log("druga liczba z wierdArary: ", liczba8)

//check if wierdArray includes "bear", use include method
const liczba9 = wierdArray.includes("bear",0)
console.log("bear w wiredArray: ", liczba9)

//find index of "bear", use indexOf method
const liczba10 = wierdArray.indexOf("bear")
console.log("pozycja w wirdArray bear:(-1 oznacza brak) ", liczba10)

//create string from wierdArray, words seperated by ', ', use join method
const liczba11 = wierdArray.join(', ')
console.log("oddzielone , : ", liczba11)
//find index of element "Karo" in nameArray = ["Guzik", "Karo", "Jula", "Domino", "Karo"], user lastIndexOf method
const nameArray = ["Guzik", "Karo", "Jula", "Domino", "Karo"]
const nameArray2 = ["Guzik", "Karo", "Jula", "Domino", "Karo"]
const liczba12 = nameArray2.lastIndexOf("Karo")
console.log("karo: ", liczba12)

//delete last element from nameArray, use pop mathod
const liczba13 = nameArray2.pop()
console.log(nameArray2, liczba13)

//add new element "Asiek" at the end of nameArraym, use push method
const liczba14 = nameArray2.push("Asiek")
console.log("nowa długość tablicy: ", liczba14, nameArray2)

//reverse nameArray, use reverse method
const liczba15 = nameArray2.reverse()
console.log("reverse: ", liczba15)

//sort nameArray, use sort method
const liczba16 = nameArray2.sort()
console.log("alfabetycznie: ", liczba16)

//slice nameArray that only elements "Guzik" and "Asiek" were left, use slice method
const liczba17 = nameArray2.slice(0,3)
console.log("slice(przed przeróbką): ", liczba17)
const aaa2 = liczba17.slice(0,1)
const aaa = liczba17.slice(2)
const newArray17 =  aaa2.concat(aaa)
console.log("oprawny slice: ", newArray17)

//modificate nameArray in a way that element "Guzik" was replaced with "Karo" element, use splice method
const liczba18 = nameArray2.splice(2,1,'Karo')
console.log("splice: ", liczba18, nameArray2)
//delete first element from nameArray, use shift method
const liczba19 = nameArray2.shift()
console.log("odrzucona zmienna: ", liczba19, "reszta tablicy: ", nameArray2)

//add "Guzik,, "Asiek", Jula" and "Domino" elements to nameArray, use unshift method
const liczba20 = nameArray.unshift("Guzik", "Asiek", "Jula", "Domino")
console.log("liczba zmiennych po dodaniu: ", liczba20)