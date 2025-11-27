let seconds=Number(prompt("Enter number of seconds to count down:"));
let stopped=false;
document.addEventListener("keydown",(event) => {
    if (event.key ==="s") {
        console.log("Stop key pressed!");
        stopped=true;
    }
        });

        let timer=setInterval(() =>{
            if (stopped){
                console.log("Countdown Stopped by User!");
                clearInterval(timer);
                return;
            }
            console.log("Time left:",seconds);
            seconds--;
            if(seconds<0){
                clearInterval(timer);
                console.log("Countdown Complete!");
            }
        }, 1000);
        setTimeout(() => {
            if(stopped) {
                console.log("User stopped the countdown (checked via delayed timeout).");
            }
        }, 30000);