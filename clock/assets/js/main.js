function clock() {
    const hourArrow = document.querySelector('.hours');
    const minuteArrow = document.querySelector('.minutes');
    const secondArrow = document.querySelector('.seconds');
    const deg = 6

    setInterval(() =>{
        const day = new Date();

        const hour = day.getHours() * 30;
        const minute = day.getMinutes() * deg;
        const second = day.getSeconds() * deg;

        hourArrow.style.transform = `rotate(${hour + (minute/12)}deg)`;
        minuteArrow.style.transform = `rotate(${minute}deg)`
        secondArrow.style.transform = `rotate(${second}deg)`
    },0)
}

clock()