var images= ["Grandfather.png","Father.png","Mother.png","I(Me).png","Sister.png","Puppy.png"];
var names=["Yashpal Grover","Ripan Kumar Grover","Pooja Grover","Vidit Grover(Me)","Nitya Grover","Tommy"];
var i =0;
function change(){
    document.getElementById("pic").src=images[i];
    document.getElementById("name").innerHTML=names[i];
    i++;
    if (i == 6){
        i=0;
    }

}
