

function createCircle(radius){
    return{
            radius:radius,
            draw:function(){
                console.log("draw")
            }
    }
}
 const circle =createCircle(1)
//constructor function
function Circle(radius){
    console.log('this', this)
    this.radius=radius;
    this.draw=function(){
        console.log("draw");
    }
}
const another =  Circle(1);