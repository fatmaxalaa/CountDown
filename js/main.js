const countdown = () => {
        const countDate = new Date('june 30, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const gap = countDate - now; 

        const sec = 1000;
        const min = sec * 60;
        const hour = min * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / min);
        const textSec = Math.floor((gap % min) / sec);


        document.querySelector(".day").innerHTML = textDay;
        document.querySelector(".hour").innerHTML = textHour;
        document.querySelector(".minute").innerHTML = textMinute;
        document.querySelector(".second").innerHTML = textSec;

};

setInterval(countdown, 1000);
