let tareas = []; //Array para almacenar las tareas

function agregarTarea() {
    const texto = document.getElementById('tarea').value.trim();
    const prioridad = document.getElementById('prioridad').value;

    if (texto === "") {
        alert("Debes escribir una tarea.");
        return;
    }

    tareas.push({ texto, prioridad });
    document.getElementById('tarea').value = "";
    mostrarTareas();
}

function mostrarTareas() {
    const lista = document.getElementById('lista-tareas');
    lista.innerHTML = "";

    // Ordenar por prioridad (alta primero)
    const ordenPrioridad = { 'alta': 1, 'media': 2, 'baja': 3 };
    tareas.sort((a, b) => ordenPrioridad[a.prioridad] - ordenPrioridad[b.prioridad]);

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.classList.add("tarea");

        // Agregar clase según prioridad
        if (tarea.prioridad === "alta") li.classList.add("alta");
        if (tarea.prioridad === "media") li.classList.add("media");
        if (tarea.prioridad === "baja") li.classList.add("baja");

        li.innerHTML = `
            <span>${tarea.texto}</span>
            <div class="acciones">
                <button type="button" class="button button-editar" onclick="editarTarea(${index})">
                    <span class="button__text">Editar</span>
                    <span class="button__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" class="svg">
                            <path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M364.13,125.25,87,403l-23,45,44.99-23,277.76-277.13-22.62-22.62ZM420.69,68.69,351.31,0,422.63,71.31l49.37,49.37L420.69,68.69Z"></path>
                        </svg>
                    </span>
                </button>
                <button type="button" class="button button-eliminar" onclick="eliminarTarea(${index})">
                    <span class="button__text">Eliminar</span>
                    <span class="button__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" class="svg">
                            <path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path>
                            <line y2="112" y1="112" x2="432" x1="80" style="stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></line>
                            <path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path>
                            <line y2="400" y1="176" x2="256" x1="256" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
                            <line y2="400" y1="176" x2="192" x1="184" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
                            <line y2="400" y1="176" x2="320" x1="328" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
                        </svg>
                    </span>
                </button>
            </div>
        `;
        lista.appendChild(li);
    });
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    mostrarTareas();
}

function editarTarea(index) {
    const nuevoTexto = prompt("Editar tarea:", tareas[index].texto);
    if (nuevoTexto) {
        tareas[index].texto = nuevoTexto;
        mostrarTareas();
    }
}