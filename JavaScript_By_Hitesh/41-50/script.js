 //  document.getElementById("blue").onClick = function(){
    //   document.body.style.backgroundColor = `blue`
    // }
    //  document.getElementById("red").onClick = function(){
    //   document.body.style.backgroundColor = `red`
    // }
    function clickHandler(color){
        document.body.style.backgroundColor = `${color}`
      }
  
      document.getElementById('blue').onclick = clickHandler("blue")
      document.getElementById('red').onclick = clickHandler("red")