    let time = 10; 
    let counter;
     
    function countDownTimer() {
    	let display = document.getElementById("timer");
    	display.innerHTML = time;
     
     
    	time--;
     
    	if (time < 0) {
    		clearInterval(counter);
     
    		window.location.href = "https://bitcotasks.com/promote/25948";
    	}
    }		
     
    function startTimer() {
    	counter = setInterval(countDownTimer, 1000);
    }
     
     
    startTimer();	
