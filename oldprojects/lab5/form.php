<?php 
	$toppings = "";
	if ($_GET['top-1'] != ""){
		$toppings .= $_GET['top-1'].' ';
	}
	if ($_GET['top-2'] != ""){
		$toppings .= $_GET['top-2'].' ';
	}
	if ($_GET['top-3'] != ""){
		$toppings .= $_GET['top-3'].' ';
	}
	if ($_GET['top-4'] != ""){
		$toppings .= $_GET['top-4'];
	}
	
	print('<h1> Thank you for submitting your order!</h1>');
    print('<table><tr><td>Size:</td><td>'.$_GET['pizza-size'].'</td></tr>');
    print('<tr><td>Cooking Time:</td><td>'.$_GET['cook-type'].'</td></tr>');
	print('<tr><td>Toppings:</td><td>'.$toppings.'</td></tr>');
    print('<tr><td>Comments:</td><td>'.$_GET['comments'].'</td></tr></table>');
	print('<p><a href="index.html" title="Back to form">Return to form &raquo;</a></p>');
?>
