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
    url:
      "https://blockchain-dojot.cpqd.com.br/supply-chain/rest/v1/verify-utility-token-data",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
    json: true
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log(response.statusCode);
    if (response.statusCode === 500) {
      res.status(500).json(body);
    } else {
      res.json(body);
    }
  });
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});
