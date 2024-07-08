function bubble(){
    var clutter = "";

for(var i = 1 ; i <= 260 ; i++){
    var num = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${num}</div>`;
}

var bottom = document.querySelector(".bottom").innerHTML = clutter;

}

var time = 60 ;
function timer(){
     var setTime = setInterval(function() {
        if(time>0){
            time-- ;
            document.querySelector("#timer").textContent = time ; 
         }
         else{
            clearInterval(setTime);
            document.querySelector(".bottom").innerHTML = `<h1>Game Over</h1>`;
         }
      }, 1000);
}

var h;
function hitt(){
    h = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = h;
}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score
}
document.querySelector(".bottom").addEventListener("click" , function(n){
    var number = Number(n.target.textContent);
   if(number === h){
       increaseScore();
       bubble();
       hitt();
   }
});

bubble();
timer();
hitt();