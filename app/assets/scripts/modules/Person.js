
function PersonOldWay(name,color){
    this.greet = function(){
        console.log("Hello I'm "+this.name+" and favorate color is "+this.color );
    }
}
class Person{
    constructor(name,thing){
        this.name =name;
        this.thing =thing;    
    }
    greet()  {
        console.log("Hello I'm "+this.name+" and things is "+this.thing );   
    }
}

//module.exports =Person;//node-way
export default Person;