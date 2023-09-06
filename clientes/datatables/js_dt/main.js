//Código para Datables

//$('#example').DataTable(); //Para inicializar datatables de la manera más simple

$(document).ready(function() {    
    $('#mil_empresas').DataTable({
        "bStateSave": false,
        "bProcessing": true,
        "bServerSide": true,
        "sAjaxSource": "./back_office/base_analisis/json/b_listamil.php",
        /*
        "ajax": {
            "url": "./back_office/base_analisis/json/pruebas.php",
            "type": "POST"
        },
        */
    //para cambiar el lenguaje a español
        "language": {
                "lengthMenu": "Mostrar _MENU_ empresas",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ empresas",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
			     },
			     "sProcessing":"Procesando...",
            }
    });  
    $('#pagadores').DataTable({
        //para cambiar el lenguaje a español
            "lengthMenu": [[5,10, 20, 50, -1], [5,10, 20, 50, "All"]],
            "language": {
                    "lengthMenu": "Mostrar _MENU_ empresas",
                    "zeroRecords": "No se encontraron resultados",
                    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ empresas",
                    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "sSearch": "Buscar:",
                    "oPaginate": {
                        "sFirst": "Primero",
                        "sLast":"Último",
                        "sNext":"Siguiente",
                        "sPrevious": "Anterior"
                     },
                     "sProcessing":"Procesando...",
                }
    });

    $('#emitidas').DataTable({
        //para cambiar el lenguaje a español
        "lengthMenu": [[5, 10, 20, 50, -1], [5, 10, 20, 50, "All"]],
        "language": {
            "lengthMenu": "Mostrar _MENU_ empresas",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ empresas",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

        $('#normal').DataTable({
            //para cambiar el lenguaje a español
                "lengthMenu": [ [10, 20, 50, -1], [10, 20, 50, "All"] ],
                "language": {
                        "lengthMenu": "Mostrar _MENU_ registros",
                        "zeroRecords": "No se encontraron resultados",
                        "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                        "sSearch": "Buscar:",
                        "oPaginate": {
                            "sFirst": "Primero",
                            "sLast":"Último",
                            "sNext":"Siguiente",
                            "sPrevious": "Anterior"
                         },
                         "sProcessing":"Procesando...",
                    }
            });
            $('#reporte_log').DataTable({
                //para cambiar el lenguaje a español
                    "lengthMenu": [ [10, 20, 50, -1], [10, 20, 50, "All"] ],
                    "order": [[ 0, "desc" ]],
                    "language": {
                            "lengthMenu": "Mostrar _MENU_ registros",
                            "zeroRecords": "No se encontraron resultados",
                            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                            "sSearch": "Buscar:",
                            "oPaginate": {
                                "sFirst": "Primero",
                                "sLast":"Último",
                                "sNext":"Siguiente",
                                "sPrevious": "Anterior"
                             },
                             "sProcessing":"Procesando...",
                        }
                });

     $('#dterecibidos').DataTable({
        //para cambiar el lenguaje a español
            "bStateSave": false,
            "bProcessing": true,
            "bServerSide": true,
            "sAjaxSource": "./back_office/base_analisis/json/dte_recibidos.php",
            /*
            "ajax": {
                "url": "./back_office/base_analisis/json/dte_recibidos.php",
                "type": "POST"
            },
            */
            //"sPaginationType": "full_numbers",
            "language": {
                    "lengthMenu": "Mostrar _MENU_ registros",
                    "zeroRecords": "No se encontraron resultados",
                    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "sSearch": "Buscar:",
                    "oPaginate": {
                        "sFirst": "Primero",
                        "sLast":"Último",
                        "sNext":"Siguiente",
                        "sPrevious": "Anterior"
                     },
                     "sProcessing":"Cargando...",
                }
        });

     $('#pagadoresaut').DataTable({
        //para cambiar el lenguaje a español
            "bStateSave": false,
            "bProcessing": true,
            "bServerSide": true,
            "sAjaxSource": "./back_office/base_analisis/json/b_pagadores_au.php",
            /*
            "ajax": {
                "url": "./back_office/base_analisis/json/dte_recibidos.php",
                "type": "POST"
            },
            */
            //"sPaginationType": "full_numbers",
            "language": {
                    "lengthMenu": "Mostrar _MENU_ registros",
                    "zeroRecords": "No se encontraron resultados",
                    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "sSearch": "Buscar:",
                    "oPaginate": {
                        "sFirst": "Primero",
                        "sLast":"Último",
                        "sNext":"Siguiente",
                        "sPrevious": "Anterior"
                     },
                     "sProcessing":"Cargando...",
                }
        });
        $('#dteemitidos').DataTable({
            //para cambiar el lenguaje a español
                "lengthMenu": [ [10, 20, 50, -1], [10, 20, 50, "All"] ],
                "bStateSave": false,
                "bProcessing": true,
                "bServerSide": true,
                "sAjaxSource": "./back_office/base_analisis/json/dte_emitidos.php",
                //"sPaginationType": "full_numbers",
                "language": {
                        "lengthMenu": "Mostrar _MENU_ registros",
                        "zeroRecords": "No se encontraron resultados",
                        "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                        "infoFiltered": " ",
                        "sSearch": "Buscar:",
                        "oPaginate": {
                            "sFirst": "Primero",
                            "sLast":"Último",
                            "sNext":"Siguiente",
                            "sPrevious": "Anterior"
                         },
                         "sProcessing":"Procesando...",
                    }
            });    
        //Inicio dteemitidosfiltro
        $('#dteemitidosfiltro').DataTable({
            //para cambiar el lenguaje a español
                "columnDefs": [{ "className": "dt-center", "targets": "_all" }],
                "bStateSave": false,
                "bProcessing": true,
                "bServerSide": true,
                "sAjaxSource": "./back_office/base_analisis/json/dte_emitidos_filtro.php",
                //"sPaginationType": "full_numbers",
                "language": {
                        "lengthMenu": "Mostrar _MENU_ registros",
                        "zeroRecords": "No se encontraron resultados",
                        "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                        "infoFiltered": " ",
                        "sSearch": "Buscar:",
                        "oPaginate": {
                            "sFirst": "Primero",
                            "sLast":"Último",
                            "sNext":"Siguiente",
                            "sPrevious": "Anterior"
                         },
                         "sProcessing":"Procesando...",
                    }
            });
            $('#dterecibidosfiltro').DataTable({
                //para cambiar el lenguaje a español
                    "columnDefs": [{ "className": "dt-center", "targets": "_all" }],
                    "bStateSave": false,
                    "bProcessing": true,
                    "bServerSide": true,
                    "sAjaxSource": "./back_office/base_analisis/json/dte_recibidos_filtro.php",
                    //"sPaginationType": "full_numbers",
                    "language": {
                            "lengthMenu": "Mostrar _MENU_ registros",
                            "zeroRecords": "No se encontraron resultados",
                            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                            "infoFiltered": " ",
                            "sSearch": "Buscar:",
                            "oPaginate": {
                                "sFirst": "Primero",
                                "sLast":"Último",
                                "sNext":"Siguiente",
                                "sPrevious": "Anterior"
                             },
                             "sProcessing":"Procesando...",
                        }
                });            
        //Fin dteemitidosfiltro

});