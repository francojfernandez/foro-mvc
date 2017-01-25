<?php
#Nucleo de la aplicacion
session_start();
#Constantes de conexion
define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASS','');
define('DB_NAME','ocrendbb');



#Constantes en mayusculas - APP
define('HTML_DIR','html/');
define('APP_TITLE','FORO MVC');
define('APP_COPY', 'Copyright 2017');
define('APP_URL', 'http://localhost/github/foro-mvc/');

#Estructura
require('vendor/autoload.php');
require('core/models/class.Conexion.php');
require('core/bin/functions/Encrypt.php');
require('core/bin/functions/Users.php');

$users= Users();

?>