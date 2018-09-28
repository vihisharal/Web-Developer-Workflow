
function Person(name,color){
    this.name =name;
    this.color =color;
    this.greet = function(){
        console.log("Hello I'm "+this.name+" and favorate color is "+this.color );
    }
}
module.exports =Person;
