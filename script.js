function rollOver(element){
    let imgTag = element.getAttribute("id")
    document.getElementById(imgTag).style.border = "3px solid red"
}
function rollOut(element){
    let imgTag = element.getAttribute("id")
    document.getElementById(imgTag).style.border = "0px"
}