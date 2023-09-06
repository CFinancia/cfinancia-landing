<?php
$templateDatosForm	      = implode("",file("./templates/index.html"));
$templateFinal  = implode("", file("./templates/principal.html"));
$templateFinal 	= str_replace("[CONTENIDO]" 	  , $templateDatosForm, $templateFinal);
echo $templateFinal;
?>