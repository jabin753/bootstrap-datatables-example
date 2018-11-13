var $  = require( 'jquery' );
var dt = require( 'datatables.net' )();
var dt_sl = require('datatables.net-select')();
var tableConfig = require('./tbDefaultConfig.js');

tableConfig["ajax"] = "/data";
console.log(tableConfig);
$(document).ready(function() {
    $('#table_id').DataTable(tableConfig);
});