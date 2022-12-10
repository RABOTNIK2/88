let red=document.querySelector(".jopa1")
let blue=document.querySelector(".jopa2")
let green=document.querySelector(".jopa3")
let bad=document.querySelector(".jopa4")
let good=document.querySelector(".jopa5")
let cool=document.querySelector(".jopa6")
let jopa=document.querySelector("body")
function smena1(){
    jopa.style.backgroundColor="red"
}
function smena2(){
    jopa.style.backgroundColor="green"
}
function smena3(){
    jopa.style.backgroundColor="yellow"
}
function smena5(){
    jopa.style.backgroundColor="orange"
}
function smena6(){
    jopa.style.backgroundColor="blue"
}
red.addEventListener("click",smena1)
blue.addEventListener("click",smena2)
green.addEventListener("click",smena3)
good.addEventListener("click",smena5)
cool.addEventListener("click",smena6)
function smena4(){
    jopa.style.backgroundColor="gray"
}
bad.addEventListener("click",smena4)
