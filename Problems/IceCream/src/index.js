"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IceCream_1 = require("./IceCream");
const iceCream = new IceCream_1.IceCream(true, 'chocolate', true);
iceCream.create();
console.log(iceCream.toString());
