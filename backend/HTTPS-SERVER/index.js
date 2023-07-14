const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Sir Issac Newton",
  },
  {
    id: 2,
    name: "Albert Einstein",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");
  // /friend/2 => ['','friends']
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
        const friend = data.toString();
        console.log('Request:', data);
        friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    // res.writeHead(200, {            //alternatywna metoda ustawiania headerów
    //     "Content-Type": "application/json",
    //   });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li> Hello Isaac!</li>");
    res.write("<li> What are your thoughts on astronomy?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}... `);
}); // 127.0.0.1 => localhost


// dodanie nowej osoby do friendsów 
// fetch('http://localhost:3000/friends', {
//     method: 'POST',
//     body: JSON.stringify({id: 3, name: 'Ryan Dahl'})
// });