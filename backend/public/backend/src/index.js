"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var express = require("express");
var path = require("path");
var network_1 = require("./core/network");
var app = express();
app.use("/", express.static(path.join(__dirname, "../../../../frontend/public")));
app.listen(process.env.PORT || 80, function () { console.log("Server has started..."); });
exports.server = {
    network: new network_1.Network()
};
