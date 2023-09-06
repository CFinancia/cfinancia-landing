<?php
include("./globales/redes.php");

$redes  		= redes(); 

$title          = "Factoring, confirming en Colombia. C-FINANCIA by cesionbnk";

$templateFinal  = implode("", file("./media/index.html"));
$templateFinal  = str_replace("[TITULO]"           	, $title          , $templateFinal);

$menu_login     = implode("", file("./media/login.html"));
$templateFinal  = str_replace("[LOGIN_ACCESO]"     	, $menu_login     , $templateFinal);

$menu_menu    = implode("", file("./media/menu.html"));
$templateFinal  = str_replace("[MENU]"            	, $menu_menu      , $templateFinal);

$menu_menu    = implode("", file("./media/footer.html"));
$templateFinal  = str_replace("[FOOTER]"            , $menu_menu      , $templateFinal);
$templateFinal  = str_replace("[REDES]"             , $redes      	  , $templateFinal);

echo $templateFinal;

?>


