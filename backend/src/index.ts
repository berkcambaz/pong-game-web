import express = require("express");
import path = require("path");
import { Network } from "./core/network";

const app = express();

app.use("/", express.static(path.join(__dirname, "../../frontend/public")));
app.listen(process.env.PORT || 80, () => { console.log("Server has started...") });

export const server = {
  network: new Network()
}
