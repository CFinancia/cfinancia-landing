"use strict";
// Class definition

var KTSummernoteDemo = function () {    
    // Private functions
    var demos = function () {
        $('#summernote_1').summernote({
            placeholder: 'Ingrese el contrato',
            height: 150
        });
        $('#summernote_2').summernote({
            placeholder: 'Ingrese el contrato',
            height: 150
        });
        /*
        $(function(){
            $('#forma_contrato').submit(function(event){
   
              var messageData = $('#summernote_1').summernote('code');
   
             event.preventDefault();
             $.ajax({ 
              url: 'back_office/admin/contratos_versiones.php',
              type: 'post',
              data: { 
               'texto' : 'texto', 
               'contrato_texto' : messageData, 
              }, 
              success: function(response){ 
               if(response == 'success'){ 
                //
                } else if (response == 'error'){
                    alert('Usuario  Modificado Correctamente')
                }
               }
              });
             });
           });
           */
    }

    return {
        // public functions
        init: function() {
            demos(); 
        }
    };
}();

// Initialization
jQuery(document).ready(function() {
    KTSummernoteDemo.init();
});