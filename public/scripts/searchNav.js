// -------------------------------Buscar contenido -------------------------------------

//Ejecutando funciones
document
  .getElementById("icon-search")
  .addEventListener("click", mostrar_buscador);
document
  .getElementById("cover-ctn-search")
  .addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

//Funcion para mostrar el buscador
function mostrar_buscador() {
  bars_search.style.transition = "all 600ms";
  bars_search.style.display = "block";
  bars_search.style.top = "60px";
  cover_ctn_search.style.display = "block";
  inputSearch.focus();

  if (inputSearch.value === "") {
    box_search.style.display = "none";
  }
}

//Funcion para ocultar el buscador
function ocultar_buscador() {
  bars_search.style.top = "-22px";
  cover_ctn_search.style.display = "none";
  inputSearch.value = "";
  box_search.style.display = "none";
  bars_search.style.position = "fixed";
}

//Creando filtrado de busqueda

document
  .getElementById("inputSearch")
  .addEventListener("keyup", buscador_interno);

function buscador_interno() {
  filter = inputSearch.value.toUpperCase(); // convierte el texto en mayuscula
  li = box_search.getElementsByTagName("li"); // obtenemos la etiqueta li

  //Recorriendo elementos a filtrar mediante los "li"
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      box_search.style.display = "block";

      if (inputSearch.value === "") {
        box_search.style.display = "none";
      }
    } else {
      li[i].style.display = "none";
    }
  }
}
