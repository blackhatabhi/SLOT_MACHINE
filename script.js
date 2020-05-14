
button.addEventListener("click",function(){
    let value1 = document.getElementById('value1')
    let value2 = document.getElementById('value2')
    let value3 = document.getElementById('value3')
    let won =document.getElementById('won')
    value1.style.animation="slotspin calc(1s / var(--speed)) 26";
    value2.style.animation="slotspin calc(1s / var(--speed)) 26";
    value3.style.animation="slotspin calc(1s / var(--speed)) 26";
    let inpSpeed = document.getElementById('inpSpeed')
    
    let values = [
        '🥺', '😂', '🤓', '😃', '😇', '😪', '😭'
    ]
    
    function getRandomValue() {
        return values[Math.floor(Math.random() * 7)]
    }
    
    let animationId;
    
    function updateAnimation(newSpeed) {
        if (animationId) clearInterval(animationId)
    
        animationId = setInterval(() => {
    
            value1.innerText = getRandomValue()
            value2.innerText = getRandomValue()
            value3.innerText = getRandomValue()
        
        }, 1000 / newSpeed)
    }
    let speed=1
    for(let i=0;i<9;i++){
        setTimeout(() => {
            speed=speed+0.2
            document.documentElement.style.setProperty('--speed',speed)
            updateAnimation(speed)
        }, 1000)
    }
      setTimeout(() => {
        clearInterval(animationId);
      }, 9000)
    
      setTimeout(() => {
          if(value1.innerText==value2.innerText&&value2.innerText==value3.innerText){
              won.innerHTML="YOU WON"
        

          }
          else{
          
            won.innerHTML="YOU LOST"
          }
      }, 10000)
  
    })