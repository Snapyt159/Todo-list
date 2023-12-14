"use strict";

function agregarTarea() {
    const tarea = document.getElementById("taskInput").value;
    if (tarea.trim() === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    const tableBody = document.getElementById("taskTable").getElementsByTagName('tbody')[0];

    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = tableBody.rows.length;
    cell2.innerHTML = tarea;
    cell3.innerHTML = '<span style="color:#ff9800;">In progress</span>';
    cell4.innerHTML = `<button type="button" class="btn btn-danger" onclick="eliminarTarea(this)">Delete</button>
                        <button type="button" class="btn btn-success ms-1" onclick="completarTarea(this)">Finished</button>`;

    // Limpiar el campo de entrada
    document.getElementById("taskInput").value = "";
}

// Función para eliminar una tarea de la lista
function eliminarTarea(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Función para marcar una tarea como completada
function completarTarea(button) {
    const row = button.parentNode.parentNode;
    row.cells[2].innerHTML = '<span style="color:#008f39;">Finished</span>';
}

// Función para obtener las tareas (puedes personalizar esto según tus necesidades)
function obtenerTareas() {
    // Aquí puedes realizar alguna acción para obtener las tareas (por ejemplo, una llamada a una API).
    alert("Obteniendo tareas...");
}

/* modo oscuro */

const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();

}