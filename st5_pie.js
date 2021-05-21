google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
 var data = google.visualization.arrayToDataTable([
 ['Flow', 'Percent'],
 ['In Progress',    0],
 ['Failed',      6],
 ['No Run',  0],
 ['Passed', 34],
 ]);

 var options = {
  title: 'ST5 - Executed On : 8/18/2018 9:55:00 AM  IST',
  pieHole: 0.35,

 };

 var chart = new google.visualization.PieChart(document.getElementById('donutchart_ST5'));
 chart.draw(data, options);
}