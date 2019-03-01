const express = require("express");
const request = require("request");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/", (req, res) => {
  const { body } = req;
  const options = {
    method: "POST",
		timeout: 15000,
    url:
      "https://blockchain-dojot.cpqd.com.br/supply-chain/rest/v1/verify-utility-token-data",
    headers: {
      "Content-Type": "application/json"
    },
//    body: JSON.stringify(body),
   	body,
    json: true
  };

	console.log('Posting:', options)

  request(options, function(error, response, body) {
		console.log('body', body);
    if (error) throw new Error(error);
    console.log(response.statusCode);
		
		res.status(response.statusCode).json(body);
//		return;
//    if (response.statusCode === 500) {
//			console.log('sending 500');
//      res.status(500).json(body);
//    } else {
//			console.log('sending something else');
//      res.json(body);
//    }
  });
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});
