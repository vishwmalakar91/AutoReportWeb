google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
 var data = google.visualization.arrayToDataTable([
 ['Flow', 'Percent'],
 ['In Progress',    0],
 ['Failed',      8],
 ['No Run',  0],
 ['Passed', 32],
 ]);

 var options = {
  title: 'ST3 - Executed On : 8/24/2018 5:33:00 AM  IST',
  pieHole: 0.35,

 };

 var chart = new google.visualization.PieChart(document.getElementById('donutchart_ST3'));
 chart.draw(data, options);
}