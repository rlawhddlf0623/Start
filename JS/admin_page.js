const input = document.getElementsByClassName("search_box");

input.addEventListener('click',function(){
    input.classList.toggle('change-border')
})


// chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(300, 99, 132, 0.2)',
            borderColor: 'rgba(300, 99, 132, 1)',
            borderWidth: 1,
            fill:true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});