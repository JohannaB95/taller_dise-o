window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".header-fixed").style.top = "0"; /* Mostrar el header fijo */
    } else {
        document.querySelector(".header-fixed").style.top = "-150px";
    }
}

document.addEventListener('DOMContentLoaded', function () {
  let btns = document.querySelectorAll('.btn-outline-secondary');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      let card = btn.closest('.card');

      let collapse = card.querySelector('.collapse');

      collapse.classList.toggle('show');
    });
  });
});

function desplegarDetalles(event) {
  event.preventDefault();
  const detailsContainer = event.target.parentElement.nextElementSibling;
  if (detailsContainer.style.display === "none") {
    detailsContainer.style.display = "block";
    event.target.innerText = "Ocultar detalles";
  } else {
    detailsContainer.style.display = "none";
    event.target.innerText = "Ver detalles";
  }
}
function comprarCurso(nombreCurso, precioCurso) {
  console.log('nombre', nombreCurso)
  console.log('precio', precioCurso)
  setTimeout(function () {
    window.location.href = 'formulario.html?curso=' + encodeURIComponent(nombreCurso) + '&precio=' + encodeURIComponent(precioCurso);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const curso = urlParams.get('curso');
  const precio = urlParams.get('precio');

  document.getElementById('nombre-curso-texto').textContent = curso;
  document.getElementById('precio-curso-texto').textContent = precio;
});

$(document).ready(function() {
  function mostrarErrorAlert() {
      $('#errorAlert').fadeIn(200).delay(2000).fadeOut(200);
  }

  function mostrarSuccessAlert() {
      $('#successAlert').fadeIn(200).delay(2000).fadeOut(200);
  }

  $('.modal').on('hidden.bs.modal', function () {
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
  });

  $('#confirmarPagoBtn').click(function() {
      $('#pagarModal').modal('hide');
      setTimeout(mostrarSuccessAlert, 500); 
  });

  $('#confirmarCancelacionBtn').click(function() {
      $('#cancelarModal').modal('hide');
      setTimeout(mostrarErrorAlert, 500);
  });
});

document.addEventListener('DOMContentLoaded', function () {

  let resp = document.getElementById('respuesta');

  document.getElementById('formulario-pago').addEventListener('submit', function (e) {
    e.preventDefault();

    let curso = document.getElementById('nombre-curso-texto').textContent;
    let precio = document.getElementById('precio-curso-texto').textContent;
    let usuario = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let numTarjeta = document.getElementById('tarjeta').value;
    let fechaExpiracion = document.getElementById('fecha').value;
    let cvv = document.getElementById('cvv').value;
    let pais = document.getElementById('pais').value;

    document.getElementById('nombreCurso').innerText = "Nombre del Curso: " + curso;
    document.getElementById('precioCurso').innerText = "Precio: " + precio;
    document.getElementById('nombreResultado').innerText = "Nombre: " + usuario;
    document.getElementById('emailResultado').innerText = "Email: " + email;
    document.getElementById('tarjetaResultado').innerText = "Número de tarjeta: " + numTarjeta;
    document.getElementById('fechaResultado').innerText = "Fecha de Expiración: " + fechaExpiracion;
    document.getElementById('cvvResultado').innerText = "CVV: " + cvv;
    document.getElementById('paisResultado').innerText = "Pais: " + pais;
  });
});

const formulario = document.getElementById('formulario-pago');
const inputs = document.querySelectorAll('#formulario-pago input, #formulario-pago select');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tarjeta: /^\d{16}$/,
    fecha: /^(0[1-9]|1[0-2])\/\d{2}$/,
    cvv: /^\d{3}$/, 
}

const campos = {
    nombre: false,
    correo: false,
    tarjeta: false,
    fecha: false,
    cvv: false,
    pais: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "email":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "tarjeta":
            validarCampo(expresiones.tarjeta, e.target, 'tarjeta');
            break;
        case "fecha":
            validarCampo(expresiones.fecha, e.target, 'fecha');
            break;
        case "cvv":
            validarCampo(expresiones.cvv, e.target, 'cvv');
            break;
        case "pais":
            validarCampoSeleccionado(e.target, 'pais');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value) && input.value.trim() !== ""){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarCampoSeleccionado = (input, campo) => {
    if(input.value !== ""){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    const formValido = Object.values(campos).every((campo) => campo);
    if(formValido && terminos.checked ){
        formulario.reset();

        document.getElementById('successAlert').classList.add('alert-success-activo');
        setTimeout(() => {
            document.getElementById('successAlert').classList.remove('alert-success-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('errorAlert').classList.add('alert-danger-activo');
    }
});
