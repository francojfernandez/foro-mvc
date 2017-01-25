<?php
if($_POST){
	require('core/core.php');//esta todo
	switch (isset($_GET['mode']) ? $_GET['mode']: null) {
		case 'login':
			require('core/bin/ajax/goLogin.php');
			break;

		case 'reg':
			require('core/bin/ajax/goReg.php');
			break;
		
		default:
			# code...
			break;
	}
}else{
	header('location: index.php');
}
?>