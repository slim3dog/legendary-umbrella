const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/rate", async (req, res) => {
  try {
    const { from, to, fromNetwork, toNetwork, amount } = req.query;

    console.log({ from, to, fromNetwork, toNetwork, amount });
    const data = await axios(
      `https://api.swapuz.com/api/Home/v1/rate?from=${from}&to=${to}&amount=${amount}&fromNetwork=${fromNetwork}&toNetwork=${toNetwork}&mode=floating`
    );

    res.send(data.data);
  } catch (error) {
    // console.log(error);
  }
});

app.listen(3000, () => {
  console.log("server started");
});
