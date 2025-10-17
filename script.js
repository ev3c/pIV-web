// Productos de la tienda
const productos = [
    {
        id: 1,
        nombre: "Llavero CPU Vintage",
        categoria: "llaveros",
        precio: 12.99,
        descripcion: "Llavero único hecho con un procesador Intel Pentium 4",
        imagen: "images/llavero-cpu.jpg"
    },
    {
        id: 2,
        nombre: "Colgante SO-DIMM RGB",
        categoria: "colgantes",
        precio: 24.99,
        descripcion: "Elegante colgante con memoria RAM SO-DIMM y cadena de acero",
        imagen: "images/colgante-ram.jpg"
    },
    {
        id: 3,
        nombre: "Llavero Chip Resistencia",
        categoria: "llaveros",
        precio: 9.99,
        descripcion: "Llavero artesanal con resistencias de colores soldadas",
        imagen: "images/llavero-resistencia.jpg"
    },
    {
        id: 4,
        nombre: "Pendientes Condensadores",
        categoria: "pendientes",
        precio: 18.99,
        descripcion: "Par de pendientes hechos con condensadores electrolíticos miniatura",
        imagen: "images/pendientes-condensadores.jpg"
    },
    {
        id: 5,
        nombre: "Colgante GPU Cooler",
        categoria: "colgantes",
        precio: 29.99,
        descripcion: "Colgante con mini ventilador de GPU y cristales",
        imagen: "images/colgante-gpu.jpg"
    },
    {
        id: 6,
        nombre: "Pulsera Circuito Integrado",
        categoria: "pulseras",
        precio: 34.99,
        descripcion: "Pulsera con múltiples chips integrados y cadena ajustable",
        imagen: "images/pulsera-circuito.jpg"
    },
    {
        id: 7,
        nombre: "Llavero Disco Duro",
        categoria: "llaveros",
        precio: 15.99,
        descripcion: "Llavero con plato de disco duro espejado",
        imagen: "images/llavero-disco.jpg"
    },
    {
        id: 8,
        nombre: "Pendientes LED RGB",
        categoria: "pendientes",
        precio: 22.99,
        descripcion: "Pendientes con LEDs funcionales RGB (con batería)",
        imagen: "images/pendientes-led.jpg"
    },
    {
        id: 9,
        nombre: "Colgante Procesador Dorado",
        categoria: "colgantes",
        precio: 39.99,
        descripcion: "Procesador AMD recubierto en resina epoxi con purpurina dorada",
        imagen: "images/colgante-procesador.jpg"
    },
    {
        id: 10,
        nombre: "Pulsera PCB Verde",
        categoria: "pulseras",
        precio: 27.99,
        descripcion: "Pulsera hecha con fragmentos de placa base verde",
        imagen: "images/pulsera-pcb.jpg"
    },
    {
        id: 11,
        nombre: "Llavero Transistor Vintage",
        categoria: "llaveros",
        precio: 11.99,
        descripcion: "Llavero retro con transistores de los años 80",
        imagen: "images/llavero-transistor.jpg"
    },
    {
        id: 12,
        nombre: "Pendientes Micro SD",
        categoria: "pendientes",
        precio: 16.99,
        descripcion: "Elegantes pendientes con tarjetas Micro SD auténticas",
        imagen: "images/pendientes-microsd.jpg"
    }
];

// Carrito de compras
let carrito = [];

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
    setupFilters();
    cargarCarritoLocalStorage();
    actualizarContadorCarrito();
});

// Mostrar productos en el grid
function mostrarProductos(productosAMostrar) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    productosAMostrar.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => mostrarModal(producto);

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image" loading="lazy">
            <div class="product-info">
                <div class="product-category">${producto.categoria}</div>
                <h3 class="product-name">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-footer">
                    <span class="product-price">${producto.precio.toFixed(2)}€</span>
                    <button class="btn-add-cart" onclick="event.stopPropagation(); agregarAlCarrito(${producto.id})">
                        Añadir
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Configurar filtros
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Actualizar botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filtrar productos
            const categoria = button.dataset.category;
            if (categoria === 'todos') {
                mostrarProductos(productos);
            } else {
                const productosFiltrados = productos.filter(p => p.categoria === categoria);
                mostrarProductos(productosFiltrados);
            }
        });
    });
}

// Agregar producto al carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
        guardarCarritoLocalStorage();
        
        // Animación de feedback
        const cartIcon = document.querySelector('.cart-icon');
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    guardarCarritoLocalStorage();
}

// Actualizar carrito
function actualizarCarrito() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (carrito.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Tu carrito está vacío</div>';
        cartTotal.textContent = '0.00€';
    } else {
        cartItems.innerHTML = '';
        let total = 0;

        carrito.forEach((item, index) => {
            total += item.precio;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.nombre}</div>
                    <div class="cart-item-price">${item.precio.toFixed(2)}€</div>
                </div>
                <button class="cart-item-remove" onclick="eliminarDelCarrito(${index})">✕</button>
            `;
            cartItems.appendChild(cartItem);
        });

        cartTotal.textContent = `${total.toFixed(2)}€`;
    }

    actualizarContadorCarrito();
}

// Actualizar contador del carrito
function actualizarContadorCarrito() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = carrito.length;
}

// Toggle carrito
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Mostrar modal de producto
function mostrarModal(producto) {
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="modal-product-image">
        <div class="product-category">${producto.categoria.toUpperCase()}</div>
        <h2 class="product-name" style="margin: 1rem 0;">${producto.nombre}</h2>
        <p class="product-description" style="margin-bottom: 1.5rem;">${producto.descripcion}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span class="product-price" style="font-size: 2rem;">${producto.precio.toFixed(2)}€</span>
            <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id}); closeModal();">
                Añadir al Carrito
            </button>
        </div>
        <div style="color: var(--text-gray); font-size: 0.9rem; margin-top: 2rem;">
            <p>✓ Pieza única hecha a mano</p>
            <p>✓ Componentes electrónicos auténticos</p>
            <p>✓ Envío gratuito en pedidos superiores a 50€</p>
        </div>
    `;

    modal.classList.add('active');
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Guardar carrito en localStorage
function guardarCarritoLocalStorage() {
    localStorage.setItem('techcraft-carrito', JSON.stringify(carrito));
}

// Cargar carrito desde localStorage
function cargarCarritoLocalStorage() {
    const carritoGuardado = localStorage.getItem('techcraft-carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
}

// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Botón de checkout
document.querySelector('.btn-checkout').addEventListener('click', () => {
    if (carrito.length > 0) {
        alert('¡Gracias por tu compra! En una tienda real, esto te llevaría al proceso de pago.\n\nTotal: ' + 
              carrito.reduce((sum, item) => sum + item.precio, 0).toFixed(2) + '€');
        carrito = [];
        actualizarCarrito();
        guardarCarritoLocalStorage();
        toggleCart();
    } else {
        alert('Tu carrito está vacío');
    }
});

