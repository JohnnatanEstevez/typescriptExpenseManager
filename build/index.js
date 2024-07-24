"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3001;
app.get("/", controller_1.default);
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
