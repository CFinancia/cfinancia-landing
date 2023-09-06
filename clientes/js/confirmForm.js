//next-step

$("#solicitante_nombre").keyup( function () {
    var value = $("#solicitante_nombre").val();
    $("span[name=confirm_nombres]").text(value);
});

$("#solicitante_apellidos").keyup( function () {
    var value = $("#solicitante_apellidos").val();
    $("span[name=confirm_apellidos]").text(value);
});

$("#telefono_solicitante").keyup( function () {
    var value = $("#telefono_solicitante").val();
    $("span[name=confirm_telefono]").text(value);
});

$("#email_solicitante").keyup( function () {
    var value = $("#email_solicitante").val();
    $("span[name=confirm_email]").text(value);
});

// $("#next-step").click( function () {
//     var value = $("#tipo_id option:selected").text();
//     $("span[name=confirm_tipo_id]").text(value);
// });

// $("#solicitante_identificacion").keyup( function () {
//     var value = $("#solicitante_identificacion").val();
//     $("span[name=confirm_identificacion]").text(value);
// });

if($('#rzn_social').val()){
    var value = $("#rzn_social").val();
    $("span[name=confirm_rznsocial]").text(value);
}

$("#rzn_social").keyup( function () {
    var value = $("#rzn_social").val();
    $("span[name=confirm_rznsocial]").text(value);
});

if($('#nombre_comercial').val()){
    var value = $("#nombre_comercial").val();
    $("span[name=confirm_nombre_comercial]").text(value);
}

$("#nombre_comercial").keyup( function () {
    var value = $("#nombre_comercial").val();
    $("span[name=confirm_nombre_comercial]").text(value);
});

if($('#nit').val()){
    var value = $("#nit").val();
    $("span[name=confirm_nit]").text(value);
}

$("#nit").keyup( function () {
    var value = $("#nit").val();
    $("span[name=confirm_nit]").text(value);
});

$("#ciudad").keyup( function () {
    var value = $("#ciudad").val();
    $("span[name=confirm_ciudad_emp]").text(value);
});

$("#empresa_telefono").keyup( function () {
    var value = $("#empresa_telefono").val();
    $("span[name=confirm_telefono_emp]").text(value);
});

$("#user_email").keyup( function () {
    var value = $("#user_email").val();
    $("span[name=confirm_user_mail]").text(value);
});

$("#user_password").keyup( function () {
    var value = $("#user_password").val();
    $("span[name=confirm_user_password]").text(value);
});

$(document).ready(function () {
    $("#view_pass").click( function () {
        if($( "#view_pass" ).hasClass( "fa-eye" )){
            $('#view_pass').addClass('fa-eye-slash').removeClass('fa-eye');
            $('span[id="confirm_user_password"]').removeClass('hide-password');
        }else{
            $('#view_pass').addClass('fa-eye').removeClass('fa-eye-slash');
            $('span[id="confirm_user_password"]').addClass('hide-password');
        }
    });
});

$("#user_password_c").keyup(function(){
    var pass1 = $('#user_password').val();
    var pass2 = $('#user_password_c').val();

    if (pass1 != pass2) {
        $("#next-step").prop( "disabled", true );
        $("#user_password_c_error").show();
    }else{
        $("#next-step").prop( "disabled", false );
        $("#user_password_c_error").hide();
    }
});



