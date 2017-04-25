
//js
require("./index.js");
require("./bootstrap.min.js");
var right = require("./jsRight.js");
var left = require("./jsLeft.js");

document.getElementById('btnSelect').addEventListener('click', right.moveRight);
document.getElementById('btnSelect2').addEventListener('click', right.moveAllRight);
document.getElementById('btnSelect3').addEventListener('click', left.moveLeft);
document.getElementById('btnSelect4').addEventListener('click', left.moveAllLeft);

// css
require("../css/supportSelect.css");
