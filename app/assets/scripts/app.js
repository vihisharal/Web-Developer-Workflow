var Person=require('./modules/Person');
var $ = require('jquery');
var vishal =new Person('vishal gavali','black');
vishal.greet();

var rahul =new Person('rahul gavali','all');
rahul.greet();

$('h1').remove();