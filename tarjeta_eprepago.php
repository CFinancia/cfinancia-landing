<?php

$title          = "Factoring, confirming en Colombia. C-FINANCIA by cesionbnk";

$meta = "Ofrecemos servicios de factoring para PYMEs, brindando adelanto de facturas y financiamiento de cuentas por cobrar. Obtén financiamiento rápido y flexible para tu pequeña empresa.";

$templateFinal  = implode("", file("./media/tarjeta.html"));
$templateFinal  = str_replace("[TITULO]"           , $title          , $templateFinal);

$menu_menu    = implode("", file("./media/menu.html"));
$templateFinal  = str_replace("[MENU]"            , $menu_menu      , $templateFinal);

$menu_login     = implode("", file("./media/login.html"));
$templateFinal  = str_replace("[LOGIN_ACCESO]"     	, $menu_login     , $templateFinal);

$menu_menu    = implode("", file("./media/footer.html"));
$templateFinal  = str_replace("[FOOTER]"            , $menu_menu      , $templateFinal);

echo $templateFinal;

?>


