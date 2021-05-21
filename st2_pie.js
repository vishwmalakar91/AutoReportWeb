google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Flow', 'Percent'],
		['In Progress', 0],
		['Failed', 11],
		['No Run', 4],
		['Passed', 27],
	]);

	var options = {
		title: 'ST2 - Executed On : 6/26/2018 7:44:00 PM ',
		pieHole: 0.35,

	};

	var chart = new google.visualization.PieChart(document.getElementById('donutchart_ST2'));
	chart.draw(data, options);
}