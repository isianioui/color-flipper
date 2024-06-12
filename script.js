
//  const btn1 = document.getElementById('btn1').value
//  const btn2 = document.getElementById('btn2').value
//  const btn3 = document.getElementById('btn3').value
//  const btn4 = document.getElementById('btn4')
 const body = document.getElementsByTagName('body')[0]


 function changeColor(color){
    body.style.backgroundColor = color ;
 }

 function RandomColor(){
    const red = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)

    const col = `rgb(${red}, ${green} , ${blue})`
    body.style.backgroundColor = col ; 

 }