# 🔧 TechCraft - Tienda de Joyería con Componentes de PC

Una moderna tienda online que vende artículos únicos fabricados con piezas de ordenador recicladas, como llaveros con procesadores, colgantes con SO-DIMM, pendientes con LEDs, y mucho más.

## ✨ Características

- **Diseño Moderno**: Interfaz oscura con gradientes vibrantes y efectos de brillo
- **Catálogo de Productos**: 12 productos únicos organizados por categorías
- **Imágenes Reales**: Fotografías de alta calidad de componentes tecnológicos almacenadas localmente
- **Sin Dependencias Externas**: Funciona completamente offline
- **Sistema de Filtros**: Filtra productos por categoría (Todos, Llaveros, Colgantes, Pendientes, Pulseras)
- **Carrito de Compras**: Sistema funcional con sidebar lateral
- **Modal de Detalles**: Visualización ampliada de información de productos
- **Responsive**: Diseño adaptable a móviles, tablets y escritorio
- **LocalStorage**: El carrito persiste entre sesiones
- **Animaciones**: Efectos suaves y transiciones modernas
- **Lazy Loading**: Carga optimizada de imágenes

## 🎨 Productos Destacados

- **Llaveros**: Con CPUs vintage, discos duros, transistores
- **Colgantes**: SO-DIMM RGB, GPU Cooler, procesadores dorados
- **Pendientes**: Condensadores, LEDs RGB, tarjetas Micro SD
- **Pulseras**: Circuitos integrados, PCB verde

## 🚀 Cómo Usar

1. **Abrir la página**:
   - Simplemente abre el archivo `index.html` en tu navegador web
   - No requiere servidor web ni instalación de dependencias

2. **Navegar por los productos**:
   - Usa los filtros para ver productos por categoría
   - Haz clic en cualquier producto para ver más detalles

3. **Añadir al carrito**:
   - Haz clic en el botón "Añadir" en cualquier producto
   - El ícono del carrito mostrará la cantidad de items

4. **Ver el carrito**:
   - Haz clic en el ícono del carrito 🛒
   - Revisa tus productos y el total
   - Elimina productos si lo deseas

5. **Finalizar compra**:
   - Haz clic en "Finalizar Compra" (simulación de checkout)

## 📁 Estructura del Proyecto

```
pIV-web/
│
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── script.js           # Lógica y funcionalidad
├── README.md          # Este archivo
└── images/            # Carpeta con imágenes de productos
    ├── llavero-cpu.jpg
    ├── llavero-resistencia.jpg
    ├── llavero-disco.jpg
    ├── llavero-transistor.jpg
    ├── colgante-ram.jpg
    ├── colgante-gpu.jpg
    ├── colgante-procesador.jpg
    ├── pendientes-condensadores.jpg
    ├── pendientes-led.jpg
    ├── pendientes-microsd.jpg
    ├── pulsera-circuito.jpg
    └── pulsera-pcb.jpg
```

## 🎨 Paleta de Colores

- **Primary**: #00d9ff (Cyan brillante)
- **Secondary**: #ff006e (Rosa magenta)
- **Background**: #0a0e27 (Azul oscuro)
- **Cards**: #1a1f3a (Azul medio)
- **Text**: #ffffff (Blanco)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Gradientes, Animaciones
- **JavaScript Vanilla**: Sin dependencias externas
- **Google Fonts**: Orbitron y Poppins (requiere conexión para las fuentes)
- **LocalStorage API**: Persistencia del carrito
- **Imágenes**: 12 imágenes de alta calidad almacenadas localmente (400x400px)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px
- **Mobile**: 480px

## 🌟 Características Técnicas

- **Performance**: Sin librerías externas, carga rápida
- **Accesibilidad**: Navegación por teclado y estructura semántica
- **UX**: Feedback visual en todas las interacciones
- **Animaciones**: Suaves transiciones CSS
- **Storage**: Carrito persistente con localStorage

## 🎯 Funcionalidades Futuras (Ideas)

- Integración con pasarela de pago real
- Sistema de usuarios y login
- Wishlist (lista de deseos)
- Valoraciones y reseñas
- Búsqueda de productos
- Ordenar por precio/popularidad
- Galería de imágenes reales de productos
- Personalización de productos
- Sistema de descuentos y cupones

## 💡 Personalización

### Añadir nuevos productos:

1. Añade tu imagen en la carpeta `images/` (400x400px recomendado)
2. Edita el array `productos` en `script.js`:

```javascript
{
    id: 13,
    nombre: "Tu Producto",
    categoria: "llaveros", // llaveros, colgantes, pendientes, pulseras
    precio: 19.99,
    descripcion: "Descripción del producto",
    imagen: "images/tu-imagen.jpg"
}
```

**Fuentes recomendadas para imágenes:**
- Unsplash: https://unsplash.com/
- Pexels: https://www.pexels.com/
- Pixabay: https://pixabay.com/

**Descargar imágenes desde terminal:**
```bash
curl -o images/nombre-producto.jpg "URL_DE_IMAGEN"
```

### Cambiar colores:

Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #00d9ff;
    --secondary-color: #ff006e;
    /* ... más colores */
}
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.

## 👨‍💻 Créditos

Desarrollado con ❤️ para demostrar conceptos de desarrollo web moderno.

---

**TechCraft** - Convirtiendo la Tecnología en Arte ⚡

