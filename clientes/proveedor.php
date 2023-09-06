<?php
include('../apps/Services/DocumentosEmitidosReader.php');
include("../apps/conecta/conecta.php");

$cufe = $_GET["cufe"];

$rz_emisor = "";
$nit = "";
$disabled = "";

if($cufe != null){
    $documentosEmitidosReader = new DocumentosEmitidosReader($coneccion);
    $tituloValor = $documentosEmitidosReader->ReadByCufe($cufe);
    $rz_emisor = $tituloValor->rz_emisor;
    $nit = $tituloValor->emisor;
    $disabled = "readonly";
}

$templateDatosForm	= implode("",file("./templates/index_proveedor.html"));
$templateDatosForm 	= str_replace("[RAZONSOCIAL]" 	  , $rz_emisor, $templateDatosForm);
$templateDatosForm 	= str_replace("[NIT]" 	  , $nit, $templateDatosForm);
$templateDatosForm 	= str_replace("[DISABLED]" 	  , $disabled, $templateDatosForm);
$templateFinal  = implode("", file("./templates/principal.html"));
$templateFinal 	= str_replace("[CONTENIDO]" 	  , $templateDatosForm, $templateFinal);

//Datos traidos del POST


echo $templateFinal;
?>