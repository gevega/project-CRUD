const formulario = document.getElementById("form");
const inputs = document.querySelectorAll(".form_grupo-input input, textarea")

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10,14}$/,
	mensaje: /^.{5,500}$/
}

const campos = {
	nombre: false,
	apellido: false,
	mail: false,
	telefono: false,
	mensaje: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			//validarCampo(expresiones.nombre, e.target, "nombre");
			break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, "apellido");
			break;
		case "mail":
			validarCampo(expresiones.mail, e.target, "mail");
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, "telefono");
			break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, "mensaje");
			break;
	}	
}

const validarCampo = (expresion, input, campo) => { 
	if(expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove("form_grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.add("form_grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
		document.querySelector(`#grupo__${campo} p`).classList.remove("form_input-error-activo");
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add("form_grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.remove("form_grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
		document.querySelector(`#grupo__${campo} p`).classList.add("form_input-error-activo");
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
	//e.preventDefault();
	if(campos.nombre && campos.apellido && campos.mail && campos.telefono && campos.mensaje){
		formulario.reset();

		document.getElementById("form_exito").classList.add("form_exito-activo");
		setTimeout(() => {
			document.getElementById("form_exito").classList.remove("form_exito-activo");
		}, 5000);

		document.querySelectorAll(".form_grupo-correcto").forEach((icono) => {
			icono.classList.remove("form_grupo-correcto");
		});
		document.getElementById("form_error").classList.remove("form_error-activo");
	} else {
		document.getElementById("form_error").classList.add("form_error-activo");
	}
});