const https = require("https");

// const jeden = () => console.log("Hello");

// const dwa = (arg) => {
//   return arg;
// };

// const fooP = (arg) => {
//   const a = 5;
//   const b = 6;
//   return arg(a, b);
// };

// jeden();

// const obj = {
//   a: function (a) {
//     return a;
//   },
//   b: jeden,
// };

// console.log(obj.a(4));
// obj.b();

// dwa(() => console.log(10));

// const refFunc = dwa(() => console.log(10));
// refFunc;

// //new Promise(() => console.log(12)); // wywołuje się automatycznie to co przyjmie w agrumencie

// fooP((x, y) => console.log(x, y));
// fooP(() => console.log(90));

// const fooP2 = (argCallback) => {
//   argCallback(
//     (arg1) => console.log(arg1),
//     (arg2) => console.log(arg2)
//   );
// };

// fooP2((x, y) => {
//   x(3), y(5);
// });

// new Promise((a, b) => {
//   a(10);
//   b(60);
//   console.log("Hello");
// })
//   .then((argument_z_a) => console.log(argument_z_a)) // do catcha przechodzi to co zostanie wywołane wcześniej( nie mozna wywołać a i b razem)
//   .catch((argument_z_b) => console.log(argument_z_b)); // catch zajmuje się tym co jest podane

// new Promise((a, b) => {
//   b(() => console.log("nie udało się ")); // b trafia do kolejki
//   a(() => console.log("udało się ")); // a trafia do kolejki ale z nim się nic nie dzieje
//   console.log("Co pierwsze?");
// }) // ta która pierwsza weszła to wraca
//   .then((argument_z_a) => argument_z_a()) // do catcha przechodzi to co zostanie wywołane wcześniej( nie mozna wywołać a i b razem)
//   .catch((argument_z_b) => argument_z_b()); // catch zajmuje się tym co jest podane drugie (w tym przypadku a)

// new Promise((resolve, reject) => {
//   resolve(() => console.log("nie udało się "));
//   reject(() => console.log("udało się "));
// })
//   .then((argument_z_a) => argument_z_a())
//   .catch((argument_z_b) => argument_z_b());

new Promise((resolve, reject) => {
  https.get("https://dummyjson.com/posts", (xxx) => {
    //drugi argument to funkcja która ma się wywołać
    const data = [];
    xxx.on("data", (dane) => data.push(dane));
    xxx.on("end", () => resolve(data));
    xxx.on("error", (error) => reject(error));
  });
})
  .then((response) => console.log(response))
  .catch((error) => console.log("tutaj", error)); // jak zrobimy błąd to wyświetli z napisem tutaj ten błąd
