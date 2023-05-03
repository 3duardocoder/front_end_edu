
var click=0;
Number(click);
function clickk(){ 
redefinir();



click=click+1;
console.log(click);
document.getElementById("cont").textContent=click;



}
function redefinir(){
if (click>=99){
        document.getElementById("cont").style.color="gold";

    }
if (click>=100){
    document.getElementById("cont").style.color="lime";

click=-1;
console.clear();
}

}
