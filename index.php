<?php
require('core/core.php');

if(isset($_GET['view'])){
	if(file_exists('core/controllers' . strtolower($_GET['view']).'Controller.php')){
	include('core/controllers/' . strtolower($_GET['view']).'Controller.php');
	}else{
		#No existe
		include('core/controllers/errorController.php');
		echo strtolower($_GET['view']);
	}

}else{
	include('core/controllers/indexController.php');
}
?>