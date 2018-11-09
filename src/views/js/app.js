var $  = require( 'jquery' );
var dt = require( 'datatables.net' )();
$(document).ready(function() {
    $('#table_id').DataTable( {
        "ajax":"/data",
        "paging":   true,
        "ordering": true,
        "info":     true,
        "language": {
            "lengthMenu": "Mostrar _MENU_ filas por página",
            "zeroRecords": "No hay resultados",
            "info": "Página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay resultados",
            "infoFiltered": "(FIltrado desde _MAX_ filas)",
            "paginate": {
                "first":      "Primero",
                "last":       "Último",
                "next":       "Siguiente",
                "previous":   "Anterior"
            },
        },
    } );
} );