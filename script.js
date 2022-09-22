function rollDice(){
    var arrhex=[1,2,3,4,5,6];
    
 var clrda=arrhex[rand()];
        console.log(clrda);
          function rand(){
            return Math.floor(Math.random()*arrhex.length);
          }

var text=document.getElementById("output");
text.innerText=String(clrda) 

}
