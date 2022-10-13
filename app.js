const chartBars = document.querySelectorAll('.chart__bar');
const date = new Date();
const currentDay = date.getDay();

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        for(let i=0; i<7; i++){
            chartBars[i].style.height = `${data[i].amount * 2.5}px`;
            chartBars[i].style.setProperty('--content',`"$${data[i].amount}"`);     //replace after element's content with amount
            chartBars[currentDay - 1].style.background = "hsl(186, 34%, 60%)";


            chartBars[currentDay - 1].addEventListener('mouseenter',()=>{
                chartBars[currentDay - 1].style.background = "hsl(186, 34%, 70%)";
            })
            chartBars[currentDay - 1].addEventListener('mouseleave',()=>{
                chartBars[currentDay - 1].style.background = "hsl(186, 34%, 60%)";
            })


            chartBars[i].addEventListener('mouseover',(e)=>{
                chartBars[i].style.background = "hsl(10, 79%, 75%)";
            })
            chartBars[i].addEventListener('mouseleave',(e)=>{
                chartBars[i].style.background = "hsl(10, 79%, 65%)";
            })
        }
    })