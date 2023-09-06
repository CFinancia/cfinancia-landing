$(document).ready(function() {
    var oTable = $('#dtBasicExample').dataTable();

    // Highlight every second row
    oTable.$('tr:odd').css('backgroundColor', 'blue');
} );