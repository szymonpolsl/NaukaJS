const naszRequestObject = require('https')
// console.log(naszRequestObject)

//naszRequestObject.get()
// 200 znaczy że działa

naszRequestObject.get('https://dummyjson.com/products/1', (response) => {
  const data = []
  console.log(response.statusCode)

  response.on('data', (toCoPrzyszło) => data.push(toCoPrzyszło)) // jeśli przyjdzie event data to wykonujemy call backa 

  response.on('end', () => {
    const odpowiedź = JSON.parse(data.toString()) // parse przepisywanie jednej rzeczy na drugą
    console.log(odpowiedź)
    console.log(data)
  })
})






