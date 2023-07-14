// a to funkcja resolve, b to funkcja reject 
// const xxx = new Promise((a,b) => {
//     setTimeout(() => {
//         if (true) {
//             a("Obietnica spełniona");
//           } else {
//             b("Obietnica nie została spełniona");
//           }
//     }, 30000)
  
// })
// console.log(xxx)
//xxx.then ((result) =>  console.log(result)).catch((reject) => console.log(reject))  // co się ma stać jeżeli uda nam się spełnić obietnice (wykona się )


// a to funkcja resolve, b to funkcja reject 
const xxx = new Promise((a) => {
    setTimeout(() => {
        if (true) {
            a("20 sekund minęło");
          }
    }, 20000)
  
})
console.log(xxx)
xxx.then ((result) =>  console.log(result))


