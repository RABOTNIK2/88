let red=document.querySelector(".jopa1")
let blue=document.querySelector(".jopa2")
let green=document.querySelector(".jopa3")
let bad=document.querySelector(".jopa4")
let cool=document.querySelector(".jopa5")
let good=document.querySelector(".jopa6")
let jopa=document.querySelector("body")
function smena1(){
    jopa.style.backgroundColor="red"
}
function smena2(){
    jopa.style.backgroundColor="blue"
}
function smena3(){
    jopa.style.backgroundColor="green"
}
function smena5(){
    jopa.style.backgroundColor="yellow"
}
function smena6(){
    jopa.style.backgroundColor="grey"
}
red.addEventListener("click",smena1)
blue.addEventListener("click",smena2)
green.addEventListener("click",smena3)
cool.addEventListener("click",smena5)
good.addEventListener("click",smena6)
function smena4(){
    jopa.style.backgroundColor="crimson"
}
bad.addEventListener("click",smena4)