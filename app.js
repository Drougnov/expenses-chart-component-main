const chartBars = document.querySelectorAll('.chart__bar');

let date = new Date();
let currentDay = date.getDay();


fetch('data.json')
    .then(res => res.json())
    .then(data => {
        for(let i=0; i<7; i++){
            chartBars[i].style.height = `${data[i].amount * 2.5}px`;
            chartBars[i].style.setProperty('--content',`"$${data[i].amount}"`);
            chartBars[currentDay - 1].style.background = "hsl(186, 34%, 60%)";
        }
    })