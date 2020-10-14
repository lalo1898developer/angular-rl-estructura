# Estructura para AdminRL

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

- Utilizar la opcion "--routing", cuando se crea un modulo para que nos cree el modulo de rutas hijo.
- No colocar la opcion "--module nombremodulo", cuando se crea un modulo para evitar que se autoexporte este modulo.

HACER ESTO, NOS OBLIGA A HACER EXPORTACIONES E IMPORTACIONES MANUALES
PERO NOS AYUDA A NO TENER ERRORES EN RUTAS Y MANEJARLAS DESDE UN SOLO LUGAR QUE SERIAN LOS "INDEX"