function goReg(){
	var connect, form, response, result, user, pass, email, tyc,pass_dos,sesion;
	user = __('user_reg').value;
	pass = __('pass_reg').value;
	email= __('email_reg').value;
	pass_dos= __('pass_reg_dos').value;
	tyc= __('tyc_reg').checked ? true : false;
	console.log('entro');
	if(tyc){
		if(user !='' && pass !='' && pass_dos !='' && email !=''){
			if( pass == pass_dos){
				form = 'user='+user+'&pass='+pass+'&email='+email;
					connect = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
					connect.onreadystatechange = function(){
						if(connect.readyState == 4 && connect.status == 200){
							if(connect.responseText == 1){
								result ='<div class="alert alert-dismissible alert-success">';
					            result +='<h4>Registro completado</h4>';
					            result +="<p>Te estamos redireccionando</p>";
					          	result +='</div>';
					          	__('_AJAX_REG_').innerHTML = result;
					          	location.reload();
							}else{
								__('_AJAX_REG_').innerHTML = connect.responseText;
							}
						}else if(connect.readyState != 4){
							result ='<div class="alert alert-dismissible alert-warning">';
				            result +='<button type="button" class="close" data-dismiss="alert">&times;</button>';
				            result +='<h4>Procesado...</h4>';
				            result +="<p>Estamos trabajando</p>";
				          	result +='</div>';

						}
					}
					connect.open('POST','ajax.php?mode=reg',true);
					connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
					connect.send(form);
			}else{
				result ='<div class="alert alert-dismissible alert-danger">';
            result +='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result +='<h4>Error</h4>';
            result +="<p>Contraseña no coinciden</p>";
          	result +='</div>';
          	__('_AJAX_REG_').innerHTML = result;
			}
		}else{
			result ='<div class="alert alert-dismissible alert-danger">';
            result +='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result +='<h4>Error</h4>';
            result +="<p>Todos los campos deben estar llenos</p>";
          	result +='</div>';
          	__('_AJAX_REG_').innerHTML = result;
		}
	}else{
		result ='<div class="alert alert-dismissible alert-danger">';
            result +='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result +='<h4>Error</h4>';
            result +="<p>Terminos y condiciones deben ser aceptados</p>";
          	result +='</div>';
        __('_AJAX_REG_').innerHTML = result;
	}

	
}

function runScriptReg(e){

	if(e.keyCode == 13){
		//13 btn enter
		goReg();
	}
}