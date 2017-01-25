<?php

$db = new Conexion();

$pass = Encrypt($_POST['pass']);
$user = $db->real_escape_string ($_POST['user']);
$email = $db->real_escape_string ($_POST['email']);

$sql = $db->query("SELECT user from users where user ='$user' or email='$email' LIMIT 1");
if($db->rows($sql)==0){

}else{
	$usuario = $db->recorrer($sql)[0];
	if(strtolower($user)== strtolower($usuario)){
		
	}else{
		
	}
}
$db->close();

?>