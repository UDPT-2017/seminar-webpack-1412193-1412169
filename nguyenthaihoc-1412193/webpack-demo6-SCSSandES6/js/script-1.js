var Objects = require('./script-2.js');
require('../css/testing.css');
document.getElementById('hello-word').innerHTML = Objects.Mes;
document.getElementById('Input').addEventListener('keypress',Objects.check_number);
document.getElementById('button1').addEventListener('click', Objects.handle_number);
