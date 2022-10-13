const chartBars = document.querySelectorAll('.chart__bar');

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        for(let i=0; i<7; i++){
            chartBars[i].style.height = `${data[i].amount * 2}px`;
            chartBars[i].style.setProperty('--content',`"$${data[i].amount}"`);
        }
    })