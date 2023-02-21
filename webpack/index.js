function addButton(){
    const button = document.createElement("button");                // tworzenie guzika
    const body = document.getElementsByTagName("body")[0];          // pobieranie calego bloku body
    body.appendChild(button)                                        // przypisywanie do bloku body dodanego wcześniej guzika
    button.innerHTML = "siema";                                     // zmiana wartości wnętrza guzika (innerHTML)
    button.onclick = wynikGuzika;                                   // przypisanie funkcji wynikGuzika 
}
addButton()

function wynikGuzika(){
    console.log("fajnie dziala")
}



//to samo a inny zapis
// function wynikGuzika(){

// }
// const wynikGuzika = () =>{

// }

// const addButton = () =>{
//     return <button> siema </button>
// }