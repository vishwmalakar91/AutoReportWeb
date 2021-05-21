google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
 var data = google.visualization.arrayToDataTable([
 ['Flow', 'Percent'],
 ['In Progress',    0],
 ['Failed',      32],
 ['No Run',  6],
 ['Passed', 2],
 ]);

 var options = {
  title: 'ST4 - Executed On : 8/24/2018 9:38:00 AM  IST',
  pieHole: 0.35,

 };

 var chart = new google.visualization.PieChart(document.getElementById('donutchart_ST4'));
 chart.draw(data, options);
}