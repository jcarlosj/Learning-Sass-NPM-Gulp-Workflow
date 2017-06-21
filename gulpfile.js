/* Importamos las dependencias necesarias */
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var browserSync = require( 'browser-sync' );
var reload = browserSync .reload;

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

/* Creamos la 2da Tarea:
   1. Asigna un nombre a la tarea "serve"
   2. Asigna el array con el conjunto de tareas que se van a ejecutar previamente "sass".
   3. Define las acciones de la tarea  */
gulp .task( 'serve', [ 'sass' ], function() {
  /* a. Inicializa el servidor, indicandole los archivos a los que les va a hacer seguimiento de cambios  */
  browserSync .init ([
      'app/css/*.css',
      'app/js/*.js',
      'app/*.html'
    ],
    {
      /* Creamos nuestro servidor */
      server: {
        /* Directorio base del proyecto */
        baseDir: 'app'
      }
    }
  )
});

/* NOTA:
    Para lanzar esta tarea usamos el comando gulp y el nombre de la tarea.
    $ gulp serve

    Que se encargará a su ves de lanzar la tarea "sass"
*/

/* Creamos la 3ra Tarea:
   1. Asigna un nombre a la tarea "watch"
   2. Asigna el array con el conjunto de tareas que se van a ejecutar previamente "sass" y "serve".
   3. Define las acciones de la tarea  */
gulp .task( 'watch', [ 'sass', 'serve' ], function() {
  /* a. Ejecuta la tarea "sass" y aplica el seguimiendo de la misma al directorio "scss" y todos los archivos con extensión ".scss" */
  gulp .watch( [ 'scss/*.scss' ], [ 'sass' ] );
});

/* NOTA:
    Para lanzar esta tarea usamos el comando gulp y el nombre de la tarea.
    $ gulp watch

    Que se encargará a su ves de lanzar la tarea "sass" y la tarea "serve" previamente
*/

/* Creamos la 4ta Tarea:
    1. Asigna la tarea como una tarea por defecto
    2. Se define que tarea o tareas va a ejecutar  */
gulp .task( 'default', [ 'watch' ] );
/* NOTA:
    Para lanzar esta tarea que está definida por defecto debemos usar solamente el comando gulp.
    $ gulp watch

    Que se encargará a su ves de lanzar la tarea "watch" previamente
*/
