{
    /* <input id="camara_comercio" type="file" name="camara_comercio" />


    <button id="upload_camara_comercio" class="btn btn-info btn-custom">Gaurdar</button> */
}


$("#nit").blur(function () {
    var nit = $("#nit").val();
    $("input[name=nit_file]").val(nit);
});

$("#camara_comercio_s").submit(function (event) {
    event.preventDefault();
    var values = new FormData(this);
    var nit = $(this).serialize();
    var file = $("#camara_comercio")[0];
    var n = $("#nit_file").val();
    values.append("nit", nit);
    values.append("solicitante_camara_comercio", file);
    $("#upload_camara_comercio").attr("disabled", true);
    $("#camara_comercio_status").html('<i class="fa fa-2x fa-circle-o-notch fa-spin"></i>');
    ajaxRequest = $.ajax({
        url: "aws/writerS3.php",
        type: "post",
        contentType: false,
        processData: false,
        data: values
    });
    ajaxRequest.done(function (response, textStatus, jqXHR) {
        $("#camara_comercio_status").html("<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>");
        $("#camara_comercio_view").html("<a data-fancybox data-type='iframe' data-src='aws/readerS3.php?fileName=CesionBnk_" + file.name + "_" + n + ".pdf' href='javascript:;' data-options='{'type' : 'iframe', 'iframe' : {'preload' : false, 'css' : {'width' : '600px'}}}' class='btn btn-label-primary btn-bold btn-icon-h kt-margin-l-10' title='Ver PDF' alt='Ver PDF' style=''><i class='fa fa-eye'></i></a>");
    });

    ajaxRequest.fail(function (response) {
        $("#camara_comercio_status").html("<i class='kt-badge kt-badge--warning kt-badge--inline'>Pendiente</i>");
        $("#camara_comercio_status").html("<i class='kt-badge kt-badge--warning kt-badge--inline'>Pendiente</i>");
        alert("Error inesperado intente nuevamente");
        $("#upload_camara_comercio").attr("disabled", false);
    });
});

{
    /* <input id="rut" type="file" name="rut" />
    <button id="upload_rut" class="btn btn-info btn-custom">Gaurdar</button> */
}

$("#rut_s").submit(function (event) {
    event.preventDefault();
    var values = new FormData(this);
    var nit = $(this).serialize();
    var file = $("#rut")[0];
    var n = $("#nit_file").val();
    values.append("nit", nit);
    values.append("solicitante_rut", file);
    $("#upload_rut").attr("disabled", true);
    $("#rut_status").html('<i class="fa fa-2x fa-circle-o-notch fa-spin"></i>');
    ajaxRequest = $.ajax({
        url: "aws/writerS3.php",
        type: "post",
        contentType: false,
        processData: false,
        data: values
    });
    ajaxRequest.done(function (response, textStatus, jqXHR) {
        $("#rut_status").html("<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>");
        $("#rut_view").html("<a data-fancybox data-type='iframe' data-src='aws/readerS3.php?fileName=CesionBnk_" + file.name + "_" + n + ".pdf' href='javascript:;' data-options='{'type' : 'iframe', 'iframe' : {'preload' : false, 'css' : {'width' : '600px'}}}' class='btn btn-label-primary btn-bold btn-icon-h kt-margin-l-10' title='Ver PDF' alt='Ver PDF' style=''><i class='fa fa-eye'></i></a>");
    });

    ajaxRequest.fail(function () {
        $("#rut_status").html("<i class='kt-badge kt-badge--warning kt-badge--inline'>Pendiente</i>");
        alert("Error inesperado intente nuevamente");
        $("#upload_rut").attr("disabled", false);
    });
});

{
    /* <input id="estados_financieros" type="file" name="estados_financieros" />
    <button id="upload_estados_financieros" class="btn btn-info btn-custom">Gaurdar</button> */
}

$("#estados_financieros_s").submit(function (event) {
    event.preventDefault();
    var values = new FormData(this);
    var nit = $(this).serialize();
    var file = $("#estados_financieros")[0];
    var n = $("#nit_file").val();
    values.append("nit", nit);
    values.append("solicitante_estados_financieros", file);
    $("#update_estados_financieros").attr("disabled", true);
    $("#estados_financieros_status").html('<i class="fa fa-2x fa-circle-o-notch fa-spin"></i>');
    ajaxRequest = $.ajax({
        url: "aws/writerS3.php",
        type: "post",
        contentType: false,
        processData: false,
        data: values
    });
    ajaxRequest.done(function (response, textStatus, jqXHR) {
        $("#estados_financieros_status").html("<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>");
        $("#estados_financieros_view").html("<a data-fancybox data-type='iframe' data-src='aws/readerS3.php?fileName=CesionBnk_" + file.name + "_" + n + ".pdf' href='javascript:;' data-options='{'type' : 'iframe', 'iframe' : {'preload' : false, 'css' : {'width' : '600px'}}}' class='btn btn-label-primary btn-bold btn-icon-h kt-margin-l-10' title='Ver PDF' alt='Ver PDF' style=''><i class='fa fa-eye'></i></a>");
    });

    ajaxRequest.fail(function () {
        $("#estados_financieros_status").html("<i class='kt-badge kt-badge--warning kt-badge--inline'>Pendiente</i>");
        alert("Error inesperado intente nuevamente");
        $("#update_estados_financieros").attr("disabled", false);
    });
});

{
    /* <input id="declaracion_renta" type="file" name="declaracion_renta" />
    <button id="upload_declaracion_renta" class="btn btn-info btn-custom">Gaurdar</button> */
}

$("#declaracion_renta_s").submit(function (event) {
    event.preventDefault();
    var values = new FormData(this);
    var nit = $(this).serialize();
    var file = $("#declaracion_renta")[0];
    var n = $("#nit_file").val();
    values.append("nit", nit);
    values.append("solicitante_declaracion_renta", file);
    $("#upload_declaracion_renta").attr("disabled", true);
    $("#declaracion_renta_status").html('<i class="fa fa-2x fa-circle-o-notch fa-spin"></i>');
    ajaxRequest = $.ajax({
        url: "aws/writerS3.php",
        type: "post",
        contentType: false,
        processData: false,
        data: values
    });
    ajaxRequest.done(function (response, textStatus, jqXHR) {
        $("#declaracion_renta_status").html("<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>");
        $("#declaracion_renta_view").html("<a data-fancybox data-type='iframe' data-src='aws/readerS3.php?fileName=CesionBnk_" + file.name + "_" + n + ".pdf' href='javascript:;' data-options='{'type' : 'iframe', 'iframe' : {'preload' : false, 'css' : {'width' : '600px'}}}' class='btn btn-label-primary btn-bold btn-icon-h kt-margin-l-10' title='Ver PDF' alt='Ver PDF' style=''><i class='fa fa-eye'></i></a>");
    });

    ajaxRequest.fail(function () {
        $("#declaracion_renta_status").html("<i class='kt-badge kt-badge--warning kt-badge--inline'>Pendiente</i>");
        alert("Error inesperado intente nuevamente");
        $("#upload_declaracion_renta").attr("disabled", false);
    });
});

{
    /* <input id="ref_bancaria" type="file" name="ref_bancaria" />
    <button id="upload_ref_bancaria" class="btn btn-info btn-custom">Gaurdar</button> */
}

$("#ref_bancaria_s").submit(function (event) {
    event.preventDefault();
    var values = new FormData(this);
    var nit = $(this).serialize();
    var file = $("#ref_bancaria")[0];
    var n = $("#nit_file").val();
    values.append("nit", nit);
    values.append("solicitante_ref_bancaria", file);
    $("#upload_ref_bancaria").attr("disabled", true);
    $("#ref_bancaria_status").html('<i class="fa fa-2x fa-circle-o-notch fa-spin"></i>');
    ajaxRequest = $.ajax({
        url: "aws/writerS3.php",
        type: "post",
        contentType: false,
        processData: false,
        data: values
    });
    ajaxRequest.done(function (response, textStatus, jqXHR) {
        $("#ref_bancaria_status").html("<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>");
        $("#ref_bancaria_view").html("<a data-fancybox data-type='iframe' data-src='aws/readerS3.php?fileName=CesionBnk_" + file.name + "_" + n + ".pdf' href='javascript:;' data-options='{'type' : 'iframe', 'iframe' : {'preload' : false, 'css' : {'width' : '600px'}}}' class='btn btn-label-primary btn-bold btn-icon-h kt-margin-l-10' title='Ver PDF' alt='Ver PDF' style=''><i class='fa fa-eye'></i></a>");
    });

    ajaxRequest.fail(function () {
        $("#ref_bancaria_status").html("<i class='kt-badge kt-badge--warning kt-badge--inline'>Pendiente</i>");
        alert("Error inesperado intente nuevamente");
        $("#upload_ref_bancaria").attr("disabled", false);
    });
});

{
    /* <input id="ref_bancaria_2" type="file" name="ref_bancaria_2" />
    <button id="upload_ref_bancaria_2" class="btn btn-info btn-custom">Gaurdar</button> */
}

$("#ref_bancaria_2_s").submit(function (event) {
    event.preventDefault();
    var values = new FormData(this);
    var nit = $(this).serialize();
    var file = $("#ref_bancaria_2")[0];
    var n = $("#nit_file").val();
    values.append("nit", nit);
    values.append("solicitante_ref_bancaria_2", file);
    $("#upload_ref_bancaria_2").attr("disabled", true);
    $("#ref_bancaria_2_status").html('<i class="fa fa-2x fa-circle-o-notch fa-spin"></i>');
    ajaxRequest = $.ajax({
        url: "aws/writerS3.php",
        type: "post",
        contentType: false,
        processData: false,
        data: values
    });
    ajaxRequest.done(function (response, textStatus, jqXHR) {
        $("#ref_bancaria_2_status").html("<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>");
        $("#ref_bancaria_2_view").html("<a data-fancybox data-type='iframe' data-src='aws/readerS3.php?fileName=CesionBnk_" + file.name + "_" + n + ".pdf' href='javascript:;' data-options='{'type' : 'iframe', 'iframe' : {'preload' : false, 'css' : {'width' : '600px'}}}' class='btn btn-label-primary btn-bold btn-icon-h kt-margin-l-10' title='Ver PDF' alt='Ver PDF' style=''><i class='fa fa-eye'></i></a>");
    });

    ajaxRequest.fail(function () {
        $("#ref_bancaria_2_status").html("<i class='kt-badge kt-badge--warning kt-badge--inline'>Pendiente</i>");
        alert("Error inesperado intente nuevamente");
        $("#upload_ref_bancaria_2").attr("disabled", false);
    });
});

{
    /* <input id="ref_comercial" type="file" name="ref_comercial" />
    <button id="upload_ref_comercial" class="btn btn-info btn-custom">Gaurdar</button> */
}

$("#ref_comercial_s").submit(function (event) {
    event.preventDefault();
    var values = new FormData(this);
    var nit = $(this).serialize();
    var file = $("#ref_comercial")[0];
    var n = $("#nit_file").val();
    values.append("nit", nit);
    values.append("solicitante_ref_comercial", file);
    $("#upload_ref_comercial").attr("disabled", true);
    $("#ref_comercial_status").html('<i class="fa fa-2x fa-circle-o-notch fa-spin"></i>');
    ajaxRequest = $.ajax({
        url: "aws/writerS3.php",
        type: "post",
        contentType: false,
        processData: false,
        data: values
    });
    ajaxRequest.done(function (response, textStatus, jqXHR) {
        $("#ref_comercial_status").html("<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>");
        $("#ref_comercial_view").html("<a data-fancybox data-type='iframe' data-src='aws/readerS3.php?fileName=CesionBnk_" + file.name + "_" + n + ".pdf' href='javascript:;' data-options='{'type' : 'iframe', 'iframe' : {'preload' : false, 'css' : {'width' : '600px'}}}' class='btn btn-label-primary btn-bold btn-icon-h kt-margin-l-10' title='Ver PDF' alt='Ver PDF' style=''><i class='fa fa-eye'></i></a>");
    });

    ajaxRequest.fail(function () {
        $("#ref_comercial_status").html("<i class='kt-badge kt-badge--warning kt-badge--inline'>Pendiente</i>");
        alert("Error inesperado intente nuevamente");
        $("#upload_ref_comercial").attr("disabled", false);
    });
});

{
    /* <input id="ref_comercial_2" type="file" name="ref_comercial_2" />
    <button id="upload_ref_comercial_2" class="btn btn-info btn-custom">Gaurdar</button> */
}

$("#ref_comercial_2_s").submit(function (event) {
    event.preventDefault();
    var values = new FormData(this);
    var nit = $(this).serialize();
    var file = $("#ref_comercial_2")[0];
    var n = $("#nit_file").val();
    values.append("nit", nit);
    values.append("solicitante_ref_comercial_2", file);
    $("#upload_ref_comercial_2").attr("disabled", true);
    $("#ref_comercial_2_status").html('<i class="fa fa-2x fa-circle-o-notch fa-spin"></i>');
    ajaxRequest = $.ajax({
        url: "aws/writerS3.php",
        type: "post",
        contentType: false,
        processData: false,
        data: values
    });
    ajaxRequest.done(function (response, textStatus, jqXHR) {
        $("#ref_comercial_2_status").html("<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>");
        $("#ref_comercial_2_view").html("<a data-fancybox data-type='iframe' data-src='aws/readerS3.php?fileName=CesionBnk_" + file.name + "_" + n + ".pdf' href='javascript:;' data-options='{'type' : 'iframe', 'iframe' : {'preload' : false, 'css' : {'width' : '600px'}}}' class='btn btn-label-primary btn-bold btn-icon-h kt-margin-l-10' title='Ver PDF' alt='Ver PDF' style=''><i class='fa fa-eye'></i></a>");
    });

    ajaxRequest.fail(function () {
        $("#ref_comercial_2_status").html("<i class='kt-badge kt-badge--warning kt-badge--inline'>Pendiente</i>");
        alert("Error inesperado intente nuevamente");
        $("#upload_ref_comercial_2").attr("disabled", false);
    });
});

{
    /* <input id="rep_legal" type="file" name="rep_legal" />
    <button id="upload_rep_legal" class="btn btn-info btn-custom">Gaurdar</button> */
}

$("#rep_legal_s").submit(function (event) {
    event.preventDefault();
    var values = new FormData(this);
    var nit = $(this).serialize();
    var file = $("#rep_legal")[0];
    var n = $("#nit_file").val();
    values.append("nit", nit);
    values.append("solicitante_rep_legal", file);
    $("#upload_rep_legal").attr("disabled", true);
    $("#rep_legal_status").html('<i class="fa fa-2x fa-circle-o-notch fa-spin"></i>');
    ajaxRequest = $.ajax({
        url: "aws/writerS3.php",
        type: "post",
        contentType: false,
        processData: false,
        data: values
    });
    ajaxRequest.done(function (response, textStatus, jqXHR) {
        $("#rep_legal_status").html("<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>");
        $("#rep_legal_view").html("<a data-fancybox data-type='iframe' data-src='aws/readerS3.php?fileName=CesionBnk_" + file.name + "_" + n + ".pdf' href='javascript:;' data-options='{'type' : 'iframe', 'iframe' : {'preload' : false, 'css' : {'width' : '600px'}}}' class='btn btn-label-primary btn-bold btn-icon-h kt-margin-l-10' title='Ver PDF' alt='Ver PDF' style=''><i class='fa fa-eye'></i></a>");
    });

    ajaxRequest.fail(function () {
        $("#rep_legal_status").html("<i class='kt-badge kt-badge--warning kt-badge--inline'>Pendiente</i>");
        alert("Error inesperado intente nuevamente");
        $("#upload_rep_legal").attr("disabled", false);
    });
});

{
    /* <input id="comp_accionaria" type="file" name="comp_accionaria" />
    <button id="upload_comp_accionaria" class="btn btn-info btn-custom">Gaurdar</button> */
}

$("#comp_accionaria_s").submit(function (event) {
    event.preventDefault();
    var values = new FormData(this);
    var nit = $(this).serialize();
    var file = $("#comp_accionaria")[0];
    var n = $("#nit_file").val();
    values.append("nit", nit);
    values.append("solicitante_comp_accionaria", file);
    $("#upload_comp_accionaria").attr("disabled", true);
    $("#comp_accionaria_status").html('<i class="fa fa-2x fa-circle-o-notch fa-spin"></i>');
    ajaxRequest = $.ajax({
        url: "aws/writerS3.php",
        type: "post",
        contentType: false,
        processData: false,
        data: values
    });
    ajaxRequest.done(function (response, textStatus, jqXHR) {
        $("#comp_accionaria_status").html("<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg>");
        $("#comp_accionaria_view").html("<a data-fancybox data-type='iframe' data-src='aws/readerS3.php?fileName=CesionBnk_" + file.name + "_" + n + ".pdf' href='javascript:;' data-options='{'type' : 'iframe', 'iframe' : {'preload' : false, 'css' : {'width' : '600px'}}}' class='btn btn-label-primary btn-bold btn-icon-h kt-margin-l-10' title='Ver PDF' alt='Ver PDF' style=''><i class='fa fa-eye'></i></a>");
    });

    ajaxRequest.fail(function () {
        $("#comp_accionaria_status").html("<i class='kt-badge kt-badge--warning kt-badge--inline'>Pendiente</i>");
        alert("Error inesperado intente nuevamente");
        $("#upload_comp_accionaria").attr("disabled", false);
    });
});