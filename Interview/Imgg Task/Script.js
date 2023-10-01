console.log("hello function Check")
let imgEl4 = document.querySelector("#sigma4");
let imgEl1 = document.querySelector("#alpha1");
let imgEl2 = document.querySelector("#beta2");
let imgEl3 = document.querySelector("#Comma3");

function select1(){
   imgEl1.src=imgEl4.src
   console.log("img 1 test passed")
}
function select2(){
    imgEl2.src=imgEl4.src
    console.log("img 2 test passed")
}
function select3(){
    imgEl3.src=imgEl4.src
    console.log("img 3 test passed")
}