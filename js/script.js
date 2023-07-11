/*<AUTOCOMPLETAR BUSQUEDA UPC>*/

function autocompletar(event) {
    var campoTexto = document.getElementById("destino");
    var opciones = document.getElementById("UPC");

    if (event.key !== "Enter") {
      campoTexto.setAttribute("list", "UPC");
    } else {
      campoTexto.removeAttribute("list");
    }
  }

/*<VALIDAR CAMPOS PROGRAMACION DE VIAJE*/
function validateForm() {
  var fecha = document.getElementById('fecha').value;
  var hora = document.getElementById('hora').value;
  var ubicacion = document.getElementById('ubicacion').value;
  var destino = document.getElementById('destino').value;
  var btnProgramar = document.getElementById('btnProgramar');

  if (fecha !== "" && hora !== "" && ubicacion !== "" && destino !== "" ) {
    btnProgramar.disabled = false;
  } else {
    btnProgramar.disabled = true;
  }
}

/*<ENVIAR DATOS PROGRAMACIÓN> */

function enviarDatos() {
  // Obtener los valores del formulario
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const ubicacion = document.getElementById('ubicacion').value;
  //const destino = document.getElementById('destino').value;
  const UPC = document.getElementById('destino');
  const destino = UPC.value || UPC.options[UPC.selectedIndex].text; 
  // Construir la URL con los parámetros
  const url = `conductores.html?fecha=${fecha}&hora=${hora}&ubicacion=${ubicacion}&destino=${destino}`;
  // Abrir la ventana emergente con la URL
  window.open(url, 'popupWindow', 'width=600,height=400');
}

// Validar que los campos estén completos antes de abrir el pop-up
  if (fecha !== "" && hora !== "" && ubicacion !== "" && destino !== "" ) {
    window.open('conductores.html?fecha=' + fecha + '&hora=' + hora + '&ubicacion=' + ubicacion + '&destino=' + destino +  'popUpWindow', 'width=600,height=400');
  }
 
/*<VALIDAR FECHA> */

function validarFecha() {
  var fechaInput = document.getElementById('fecha').value;
  var fechaSeleccionada = new Date(fechaInput);
  var fechaActual = new Date();

  if (fechaSeleccionada <  fechaActual) {
    alert('Por favor, seleccione mayor a la fecha actual.');
    document.getElementById('fecha').value = '';
  }
}

  /*POP UP*/
 
    function abrirPopUp() {
      window.open('conductores.html', 'popUpWindow', 'width=600,height=400');
    }
  

/*<ENVIAR DATOS PROGRAMACIÓN> */

function enviarDatosProgramacion() {
  // Obtener los valores del formulario
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const ubicacion = document.getElementById('ubicacion').value;
  //const destino = document.getElementById('destino').value;
  const UPC = document.getElementById('destino');
  const destino = UPC.value || UPC.options[UPC.selectedIndex].text; 
  // Construir la URL con los parámetros
  const url = `resumen_viaje.html?fecha=${fecha}&hora=${hora}&ubicacion=${ubicacion}&destino=${destino}`;

}
