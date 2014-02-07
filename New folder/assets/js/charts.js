	 // Geo chart
     google.load('visualization', '1', {'packages': ['geochart']});
     google.setOnLoadCallback(drawMarkersMap);
      function drawMarkersMap() {
      var data = google.visualization.arrayToDataTable([
        ['City',   'Population', 'Area'],
        ['Rome',      2761477,    1285.31],
        ['Milan',     1324110,    181.76],
        ['Naples',    959574,     117.27],
        ['Turin',     907563,     130.17],
        ['Palermo',   655875,     158.9],
        ['Genoa',     607906,     243.60],
        ['Bologna',   380181,     140.7],
        ['Florence',  371282,     102.41],
        ['Fiumicino', 67370,      213.44],
        ['Anzio',     52192,      43.43],
        ['Ciampino',  38262,      11]
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
          ['Harrasing',     11],
          ['Poite',      2],
          ['Cursing',  2],
		  ['Dirty',    7],
          ['Insulted', 2]
        ]);

        var options = {
          title: 'My Daily Activities',
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
          ['Being Bullied', 80],
          ['Is bulling', 55]
        ]);

        var options = {
          width: 400, height: 120,
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
          ['Twitter',     11],
          ['Facebook',      2],
          ['Google Plus',  2]
        ]);

        var options = {
          title: 'Daily Activity',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }