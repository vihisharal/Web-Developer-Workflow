var $ = require('jquery');
//var Person=require('./modules/Person'); //node-way
import Person from './modules/Person';//es6 way  
var vishal =new Person('vishal gavali','White');
vishal.greet();

var rahul =new Person('rahul gavali','all');
rahul.greet();

$('h1').remove();