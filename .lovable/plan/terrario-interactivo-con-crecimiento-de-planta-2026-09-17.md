# Terrario interactivo con crecimiento de planta

## Objetivo
Reemplazar la forma borrosa del terrario por una ilustración SVG nítida que empiece como plántula y crezca de manera fluida al interactuar, conservando intactas las lecturas de sensores.

## Cambios
- Sustituir la planta y el suelo actuales por un SVG detallado, accesible y escalable dentro del terrario existente.
- Representar una planta compacta en varias etapas: brote inicial, hojas intermedias y follaje final apto para terrario.
- Animar tallos y hojas con aparición, expansión y movimiento escalonado, sin convertirla en árbol ni desbordar el recipiente.
- Activar el crecimiento al mantener el cursor sobre el terrario en computadora.
- En pantallas táctiles, alternar entre crecimiento y reinicio con cada toque; admitir también teclado para accesibilidad.
- Añadir el indicador “Pasá el cursor o tocá para verla crecer 🌱” sin tapar los chips.
- Mantener sin cambios los chips de temperatura, humedad y cooler, junto con su simulación actual.

## Archivos
- `index.html`: estructura SVG e indicador interactivo.
- `assets/css/styles.css`: dibujo, etapas y transiciones adaptables.
- `assets/js/main.js`: interacción táctil, teclado y reinicio.

## Verificación
- Ejecutar el build de producción.
- Probar crecimiento y regreso al estado inicial en escritorio y celular.
- Confirmar visualmente que el SVG sea nítido y que los tres chips sigan visibles y actualizándose.
