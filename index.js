const userInfo = require('./information');
let cowsay = require("cowsay")

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.name} and I am on the campus ${userInfo.campus}`,
    e: "oO",
    T: "U"
}));
