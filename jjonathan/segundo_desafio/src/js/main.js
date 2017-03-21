$(function(){
	$('#btn-salvar').on('click', function(){
		if(valid_form()){
			add_contato();
		}else{
			alert('Há campos a serem corrigidos');
		}
	});

	$('#btn-cancelar').on('click', function(){
		$('#mainForm')[0].reset();
	});

	$('#inputTelefone').on('keydown', function(evt){
		var numeros = /[0-9]/g;
		if (String.fromCharCode(evt.keyCode).match(numeros)) {
			telefone_mask();
		}
	});

	$('#inputNome').on('focusout', valid_nome);
	$('#inputTelefone').on('focusout', telefone_valid);
	$('#inputEmail').on('focusout', email_valid);
});

function valid_form(){
	return valid_nome() && telefone_valid() && email_valid();
}

function valid_nome(){
	remove_error('#inputNome');
	var regexp = /[^a-zA-Z ]/g;
	var nome = $('#inputNome').val();
	if(nome == '' || nome.match(regexp)){
		show_error('#inputNome');
		return false;
	}
	return true;
}

function telefone_valid(){
	remove_error('#inputTelefone');
	var regexp = /[^0-9()-/ /]/g;
	var telefone = $("#inputTelefone").val();
	if (telefone == '' || telefone.match(regexp)) {
		show_error('#inputTelefone');
		return false;
	}
	return true;
}

function email_valid(){
	remove_error('#inputEmail');
	var regexp = /[^a-zA-Z0-9@.-_]/g;
	var email = $('#inputEmail').val();
	if (email.match(regexp) || !is_email(email)) {
		show_error('#inputEmail');
		return false;
	}
	return true;
}

function is_email(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function show_error(element){
	$('<div />', {
		'class' : 'error',
		'html'	: 'Campo inválido'
	}).insertAfter(element);
}

function remove_error(element){
	if($(element).next().hasClass('error'))
		$(element).next().remove();
}

function telefone_mask(){
	var regexp = /[0-9]/g;
	var filtro = /[^0-9()-/ /]/g;
	var telefone = $('#inputTelefone').val();
	var numbers = telefone.match(regexp);
	if (numbers != null) {
		if (numbers.length == 1) {
			$('#inputTelefone').val('(' + telefone);
		}
		if (numbers.length == 2) {
			$('#inputTelefone').val(telefone + ') ');
		}
		if (numbers.length == 6) {
			$('#inputTelefone').val(telefone + '-');
		}
	}
}

function add_contato(){
	var nome = $('#inputNome').val();
	var telefone = $('#inputTelefone').val();
	var email = $('#inputEmail').val();

	var mailTo = '<a href="mailto:' + email + '">' + email + '</a>';

	var novoContato = $('<div />', {'class' : 'item'})
	.append($('<div />', {
		'class' : 'nome',
		'html' 	: nome
	}))
	.append($('<div />', {
		'class' : 'contato',
		'html' 	: telefone + ' - ' + mailTo
	}));
	$('#lista').append(novoContato);
	$('#mainForm')[0].reset();
}