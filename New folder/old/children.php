<?php


$child['first_name'] = 'Sarah';
$child['last_name'] = 'Levi';
$children[] = $child;

$child['first_name'] = 'Sivan';
$child['last_name'] = 'Levi';
$children[] = $child;

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Pratt - Free Bootstrap 3 Theme">
    <meta name="author" content="Alvarez.is - BlackTie.co">
    <link rel="shortcut icon" href="assets/ico/favicon.png">

    <title>Pratt - Free Bootstrap 3 Theme</title>

    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800' rel='stylesheet' type='text/css'>
    
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"></link>
    
        <!-- Custom styles for this template -->
    <link href="assets/css/main.css" rel="stylesheet">
    
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/smoothscroll.js"></script>
    

  </head>

  <body data-spy="scroll" data-offset="0" data-target="#navigation">

    <!-- Fixed navbar -->
	    <div id="navigation" class="navbar navbar-default navbar-fixed-top">
	      <div class="container">
	        <div class="navbar-header">
	          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	          </button>
	          <a class="navbar-brand" href="#"><b>CyberBully</b></a>
	        </div>
	        <div class="navbar-collapse collapse">
	            <p class="navbar-text navbar-right"><a href="#home" class="smothscroll">Login</a></p>
	        </div><!--/.nav-collapse -->
	      </div>
	    </div>

	<section id="home" name="home"></section>
	<div id="headerwrap">
	    <div class="container">
	    	<div class="row centered">

			
			
			
<?php
foreach ($children as $key => $val) {
?>

<div style='height: 298px; width: 301px; background-image: url(/assets/img/child.png); margin: 3px; background-repeat: no-repeat;'></div>


<?php
}
?>
			
			
			
			
			
	    	</div>
	    </div> <!--/ .container -->
	</div><!--/ #headerwrap -->


	<section id="desc" name="desc"></section>


	<div id="c">
		<div class="container">
			<div class="row">
			    <div class="col-lg-12">
			        <img src="assets/img/battlehack.svg" alt="" width="90">
			        <img src="assets/img/paypal.svg" alt="" width="80">
                    <img src="assets/img/pronto.png" alt="" width="90">		
                    <img src="assets/img/facebook.svg" alt="" width="80" style="border-radius: 5px;">
                        <img src="assets/img/google-plus.svg" alt="" width="30">
                                              
                       
			    </div>
			</div>            		
		</div>
	</div>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/bootstrap.js"></script>
  </body>
</html>
