<?php

$title          = "CesionBNK - Factoring y Confirming";

$templateFinal  = implode("", file("./media/factura-electronica.html"));
$templateFinal  = str_replace("[TITULO]"           , $title          , $templateFinal);

$menu_menu    = implode("", file("./media/menu.html"));
$templateFinal  = str_replace("[MENU]"            , $menu_menu      , $templateFinal);

$menu_login     = implode("", file("./media/login.html"));
$templateFinal  = str_replace("[LOGIN_ACCESO]"     	, $menu_login     , $templateFinal);


$menu_menu    = implode("", file("./media/footer.html"));
$templateFinal  = str_replace("[FOOTER]"            , $menu_menu      , $templateFinal);

echo $templateFinal;

?>


