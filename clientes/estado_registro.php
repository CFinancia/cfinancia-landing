<?php

if(isset($_GET['trackid']) || isset($_POST['nit'])){

    $trackId = $_GET['trackid'];
    $nit = $_POST['nit'];
    $template_header 	      = implode("",file("./templates/header.html"));
    $templateDatosForm	      = implode("",file("./templates/estado_registro.html"));
    $templateFinal  = implode("", file("./templates/principal.html"));
    $templateFinal 	= str_replace("[CONTENIDO]" 	  , $templateDatosForm, $templateFinal);
    $templateFinal 	= str_replace("[HEADER]" 	      , $template_header, $templateFinal);
    echo $templateFinal;
}else{
    $trackId = $_GET['trackid'];
    $template_header 	      = implode("",file("./templates/header.html"));
    $templateDatosForm	      = implode("",file("./templates/estado_registro_consulta.html"));
    $templateFinal  = implode("", file("./templates/principal.html"));
    $templateFinal 	= str_replace("[CONTENIDO]" 	  , $templateDatosForm, $templateFinal);
    $templateFinal 	= str_replace("[HEADER]" 	      , $template_header, $templateFinal);
    echo $templateFinal;
}


;
?>