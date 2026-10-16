
// 1. Crear los dos arreglos

let arregloIzquierdo = [12, 15];
let arregloDerecho = [20, 25];


// 2. Función agregarEdad

function agregarEdad() {

    let edad = document.getElementById("edad").value;

    edad = Number(edad);

    if (
        document.getElementById("edad").value.trim() === "" ||
        !Number.isInteger(edad)
    ) {
        alert("Ingrese una edad válida");
        return;
    }

    // Agregar edad al arreglo izquierdo
    arregloIzquierdo.push(edad);

    // Limpiar el input
    document.getElementById("edad").value = "";

    // Pintar arreglo izquierdo
    pintarArregloIzquierda();
}


// 3. Función pintarArregloIzquierda

function pintarArregloIzquierda() {

    let contenido = "";

    for (let indice = 0; indice < arregloIzquierdo.length; indice++) {

        contenido += "<tr>";

        contenido += "<td>" + arregloIzquierdo[indice] + "</td>";

        contenido += "<td>";
        contenido += "<button class='btn-eliminar' onclick='eliminarIzquierdo(" + indice + ")'>Eliminar</button>";
        contenido += "</td>";

        contenido += "<td>";
        contenido += "<button class='btn-mover' onclick='moverHaciaDerecha(" + indice + ")'>➜</button>";
        contenido += "</td>";

        contenido += "</tr>";
    }

    document.getElementById("tablaIzquierda").innerHTML = contenido;
}


// 4. Función eliminarIzquierdo

function eliminarIzquierdo(indice) {

    arregloIzquierdo.splice(indice, 1);

    pintarArregloIzquierda();
}


// 5. Función pintarArregloDerecha

function pintarArregloDerecha() {

    let contenido = "";

    for (let indice = 0; indice < arregloDerecho.length; indice++) {

        contenido += "<tr>";

        contenido += "<td>";
        contenido += "<button class='btn-mover' onclick='moverHaciaIzquierda(" + indice + ")'>⬅</button>";
        contenido += "</td>";

        contenido += "<td>" + arregloDerecho[indice] + "</td>";

        contenido += "<td>";
        contenido += "<button class='btn-eliminar' onclick='eliminarDerecho(" + indice + ")'>Eliminar</button>";
        contenido += "</td>";

        contenido += "</tr>";
    }

    document.getElementById("tablaDerecha").innerHTML = contenido;
}


// 6. Función eliminarDerecho

function eliminarDerecho(indice) {

    arregloDerecho.splice(indice, 1);

    pintarArregloDerecha();
}


// 7. Función moverHaciaDerecha

function moverHaciaDerecha(indice) {

    let edad = arregloIzquierdo[indice];

    arregloDerecho.push(edad);

    arregloIzquierdo.splice(indice, 1);

    pintarArregloIzquierda();

    pintarArregloDerecha();
}


// 8. Función moverHaciaIzquierda

function moverHaciaIzquierda(indice) {

    let edad = arregloDerecho[indice];

    arregloIzquierdo.push(edad);

    arregloDerecho.splice(indice, 1);

    pintarArregloIzquierda();

    pintarArregloDerecha();
}


// Mostrar los arreglos al iniciar

pintarArregloIzquierda();

pintarArregloDerecha();
