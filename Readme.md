# Clínica Online (MedOnline)

Proyecto front-end estático que simula una clínica online con búsqueda de especialidades, reserva de turnos y listado de profesionales.

## Funcionalidades actuales

- Landing con banner e información general.
- Búsqueda de especialistas y visualización de médicos disponibles.
- Reserva de turnos con historial en el navegador.

## Estructura del proyecto

```
.
├── index.html              # Landing principal
├── templates/              # Páginas secundarias (turnos, especialidades)
├── static/
│   ├── Js/                 # Lógica de UI en JavaScript
│   ├── css/                # Estilos
│   └── img/                # Recursos estáticos
└── data/
    └── data.json           # Datos de médicos (mock)
```

## Cómo ejecutar en local

Como es un sitio estático, podés abrir `index.html` directamente en el navegador.

Si preferís correr un servidor local (recomendado para evitar problemas con rutas y fetch):

```bash
python -m http.server 8000
```

Luego abrí `http://localhost:8000` en tu navegador.

## Datos

Los médicos se cargan desde `data/data.json` y se persisten en `localStorage` al cargar la app.

## Pendientes sugeridos (rama de desarrollo)

Este repo está en una rama de desarrollo, por lo que pueden existir secciones incompletas o placeholders.

Algunas ideas para completar:

- Agregar validaciones de formularios más completas.
- Persistir turnos en una API real o simularlos con `localStorage`.
- Completar secciones vacías del home (urgencias, más info).
- Unificar estilos y mejorar accesibilidad (labels, contraste, etc.).
- Reemplazar enlaces vacíos en el footer por rutas reales o placeholders explícitos para evitar navegación rota.
- Limpiar o reactivar el bloque de lógica comentado en app.js (o moverlo a documentación) para reducir deuda técnica y confusión en el mantenimiento.
- Considerar que fetch('/data/data.json') requiere servidor local; agregar fallback o un mensaje si se abre el HTML directo sin server.
- En la reserva de turnos, time es un input y se intenta usar innerHTML; conviene limpiar con value o controlar el estado del formulario para evitar errores de UI.