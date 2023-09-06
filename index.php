<?php
include("./globales/redes.php");

$redes  		= redes(); 

$title          = "Factoring, confirming en Colombia, Anticipos de Facturas C-FINANCIA by cesionbnk";
$meta 			= "Ofrecemos servicios de factoring para PYMEs, brindando adelanto de facturas y financiamiento de cuentas por cobrar. Obtén financiamiento rápido y flexible para tu pequeña empresa.";
$keywords		="factoring, confirming, factoring para pymes, anticipos de facturas, financiamiento de cuentas por cobrar,Sistema de Negociación de Facturas";


$templateFinal  = implode("", file("./media/index.html"));
$templateFinal  = str_replace("[TITULO]"           	, $title          , $templateFinal);

$menu_login     = implode("", file("./media/login.html"));
$templateFinal  = str_replace("[LOGIN_ACCESO]"     	, $menu_login     , $templateFinal);

$menu_menu    = implode("", file("./media/menu.html"));
$templateFinal  = str_replace("[MENU]"            	, $menu_menu      , $templateFinal);

$menu_menu    = implode("", file("./media/footer.html"));
$templateFinal  = str_replace("[FOOTER]"            , $menu_menu      , $templateFinal);
$templateFinal  = str_replace("[REDES]"             , $redes      	  , $templateFinal);

$templateFinal  = str_replace("[METAdescription]"   , $meta      	  , $templateFinal);
$templateFinal  = str_replace("[keywords]"  		, $keywords      	  , $templateFinal);




echo $templateFinal;

?>


