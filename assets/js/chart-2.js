	 // Geo chart
     google.load('visualization', '1', {'packages': ['geochart']});
     google.setOnLoadCallback(drawMarkersMap);
      function drawMarkersMap() {
      var data = google.visualization.arrayToDataTable([
        ['City',   'Population', 'Area'],
        ['Bologna',   38018,     10],
        ['Florence',  37128,     10.41],
        ['Fiumicino', 6737,      21.44],
        ['Anzio',     5219,      4.43]
      ]);

      var options = {
        region: 'IT',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    };
	
	
	// Pi chart
	google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Harrasing',     1],
          ['Poite',      12],
          ['Cursing',  2],
		  ['Dirty',    5],
          ['Insulted', 2]
        ]);

        var options = {
          title: 'Weekly language usage',
			legend: 'none',
			pieSliceText: 'label',
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
	
	
	// Gage chart
      google.load('visualization', '1', {packages:['gauge']});
      google.setOnLoadCallback(drawChartGauge);
      function drawChartGauge() {
        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Victimized', 5],
          ['Is bulling', 3]
        ]);

        var options = {
          width: 400, height: 170,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div_gauge'));
        chart.draw(data, options);
      }
	
	// Timeline
google.load('visualization', '1', {packages:['timeline']});
google.setOnLoadCallback(drawChartTimeLine);
function drawChartTimeLine() {

  var container = document.getElementById('chart_div_timeline');
  var chart = new google.visualization.Timeline(container);

  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Action' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'Bullied', new Date(2012, 2, 4), new Date(2012, 3, 3)],
    [ 'Bullied', new Date(2012, 5, 3), new Date(2012, 7, 3)],
    [ 'Bullied', new Date(2012, 9, 3), new Date(2012, 10, 3)],
    [ 'Bullied', new Date(2013, 3, 8), new Date(2013, 5, 3)],
    [ 'Bulling', new Date(2013, 2, 3), new Date(2013, 6, 12)],
    [ 'Bulling', new Date(2013, 6, 20), new Date(2013, 7, 19)],
    [ 'Bulling', new Date(2014, 1, 1), new Date(2014, 1, 10)]]
	);

  chart.draw(dataTable);
}

google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChartDonut);
      function drawChartDonut() {
        var data = google.visualization.arrayToDataTable([
          ['Activity', 'Hours per Day'],
          ['Twitter',     14],
          ['Facebook',      4]
        ]);

        var options = {
          title: 'Weekly Activity',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }