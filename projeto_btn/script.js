
var click=0;
Number(click);
function clickk(){ 
redefinir();



click=click+1;
console.log(click);
document.getElementById("cont").textContent=click;



}
function redefinir(){
if (click>=100){
click=-1;
console.clear();
}
}
