/* Importamos las dependencias necesarias */
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

/* Creamos la 1era Tarea:
   1. Ejecuta el paquete que va a realizar la tarea "sass"
   2. Define las acciones de la Tarea
      a. Indica al Gulp el directorio de origen (donde hará seguimiento a los archivos Sass)
      b. Crea un array
      c. Indica a Gulp el destino a donde se crearán los archivos preprocesados por Sass (archivos de estilos CSS)  */
gulp .task( 'sass', function() {
  gulp .src( 'scss/template-style.scss' ) /* Directorio origen */
       .pipe(
         // Objetc
         sass({
           // Array
           includedPaths: [ 'scss' ]
       }))
       .pipe( gulp .dest( 'app/css' ) );  /* Directorio destino */
});

/* NOTA:
    Para lanzar esta tarea usamos el comando gulp y el nombre de la tarea.
    $ gulp sass
*/
