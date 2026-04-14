let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio) {
    carrito.push({nombre, precio});
    total += precio;
    mostrarCarrito();
}

function mostrarCarrito() {
    let lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";

    carrito.forEach((producto, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button onclick="eliminar(${index})">❌</button>
        `;
        lista.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

function eliminar(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    mostrarCarrito();
}
