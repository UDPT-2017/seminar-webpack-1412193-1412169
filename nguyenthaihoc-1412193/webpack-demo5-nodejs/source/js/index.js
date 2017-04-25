var date = require("./jsday.js");
var month = require("./jsmonth.js");
var year = require("./jsyear.js");
$(document).ready(function() {
                var datehtml = document.getElementById('date');
                var monthhtml = document.getElementById('month');
                var yearhtml = document.getElementById('year');
                datehtml.innerHTML = date();
                monthhtml.innerHTML = month();
                yearhtml.innerHTML = year();
});
