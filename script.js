let red=document.querySelector(".jopa1")
let blue=document.querySelector(".jopa2")
let green=document.querySelector(".jopa3")
let bad=document.querySelector(".jopa4")
let jopa=document.querySelector("body")
function smena1(){
    jopa.style.backgroundColor="#3caa3c"
}
function smena2(){
    jopa.style.backgroundColor="#c154c1"
}
function smena3(){
    jopa.style.backgroundColor="#ffa420"
}
red.addEventListener("click",smena1)
blue.addEventListener("click",smena2)
green.addEventListener("click",smena3)
function smena4(){
    jopa.style.backgroundColor="#ca2c92"
}
bad.addEventListener("click",smena4)
