$("#submit-form").click(function (e) {
    e.preventDefault();
    $("#sending-form").show();
    $("#submit-form").prop( "disabled", true );
    // KTApp.progress(btn);
    var form = $("#kt_form");
    // See: http://malsup.com/jquery/form/#ajaxSubmit
    form.ajaxSubmit({
        url: "./../../apps/Controllers/SolicitanteController.php",
        type: 'post',
        success: function (response) {
            // KTApp.unprogress(btn);
            //KTApp.unblock(formEl);
            swal.fire({
                "title": "",
                "text": "Sus datos se han enviado exitosamente!",
                "type": "success",
                "confirmButtonClass": "btn btn-secondary"
            }).then(function() {
                //window.location = "./../../apps/templates/welcome.html";
            });
        },
        error: function (response) {
            swal.fire({
                "title": "",
                "text": "Fallo al envíar los datos. Por favor intente nuevamente",
                "type": "error",
                "confirmButtonClass": "btn btn-secondary"
            }).then(function () {
                $("#submit-form").prop( "disabled", false );
                $("#sending-form").hide();
            });
        }
    });
});

$("#submit-form-proveedor").click(function (e) {
    e.preventDefault();
    $("#sending-form").show();
    $("#submit-form").prop( "disabled", true );
    // KTApp.progress(btn);
    var form = $("#kt_form");
    var fs = form.serialize();
    // See: http://malsup.com/jquery/form/#ajaxSubmit
    console.log(parent);
    $.ajax({
        type: "POST",
        url: "./../../apps/Controllers/RegistroProveedorController.php",
        data: fs,
        success: function (response) {
            // KTApp.unprogress(btn);
            //KTApp.unblock(formEl);
            swal.fire({
                "title": "",
                "text": "Sus datos se han enviado exitosamente!",
                "type": "success",
                "confirmButtonClass": "btn btn-secondary"
            }).then(function() {
                //window.location = "./../../apps/templates/welcome.html";
            });
        },
        error: function (response) {
            swal.fire({
                "title": "",
                "text": "Fallo al envíar los datos. Por favor intente nuevamente",
                "type": "error",
                "confirmButtonClass": "btn btn-secondary"
            }).then(function () {
                $("#submit-form").prop( "disabled", false );
                $("#sending-form").hide();
            });
        }
    });
});