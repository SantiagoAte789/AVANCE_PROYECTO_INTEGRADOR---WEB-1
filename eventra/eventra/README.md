# Eventra

INTEGRANTES: 
@Novvulent      = Samuel Alzate Correa - Codigo: (23252022)
@SantiagoAte789 = Santiago Atehortua Jaramillo - Codigo: (230251013)
@                 Nicolas Restrepo Sánchez -  Codigo: (230251043)

Plataforma web para publicar eventos y gestionar reservas. Avance del Proyecto Integrador – Web 1
(Bases de Datos, Unidad Central del Valle del Cauca, docente: Jesús David Mejía Vergara).

Esta etapa contiene únicamente el **frontend** con **datos mockeados**; aún no hay backend.

## Tecnologías
Angular 18 (componentes standalone) · TypeScript · HTML5 · SCSS · Bootstrap 5

## Ejecución
```bash
npm install
npm start        # http://localhost:4200
```

## Estructura
```
src/app
├── components/navbar        # Barra de navegación
├── models/                  # Interfaces (Usuario, Evento, Reserva)
├── services/                # MockDataService (datos simulados)
└── pages
    ├── auth/                # login, registro
    ├── cliente/             # eventos, reservar, mis-reservas
    ├── agente/              # registrar-evento, mis-eventos, admin-reservas
    └── admin/               # reportes
```

## Rutas
| Ruta | Vista |
|---|---|
| `/auth/login`, `/auth/registro` | Inicio de sesión, Registro |
| `/cliente/eventos` | Eventos disponibles |
| `/cliente/reservar/:id` | Reservar un evento |
| `/cliente/mis-reservas` | Mis reservas con estado |
| `/agente/registrar-evento` | Registrar evento |
| `/agente/eventos` | Eventos registrados |
| `/agente/reservas` | Administrar reservas |
| `/admin/reportes` | Reportes (indicadores, gráfica y tablas) |

## Estándar de commits
Se usa Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`
(ej. `feat: agregar vista de mis reservas`).

## Integrantes
- _Agregar nombres del equipo_
