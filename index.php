<?php
// if (strpos($_SERVER['HTTP_HOST'], 'www.') === false) {
//     $urlRedireccion = 'https://www.' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
//     header('Location: ' . $urlRedireccion, true, 301);
//     exit();
// }
$m_keywords = "Factoring, Financiamiento para empresas, Liquidez para empresas, Financiamiento,credito para empresas, capital de trabajo, anticipo de facturas,Factoring para empresas,C-Financia";

$m_description= "C-Financia ofrece soluciones de Factoring para empresas. Obtén Financiamiento para empresas inmediato a través del anticipo de facturas, aumenta tu liquidez y haz crecer tu negocio. ¡Contáctanos para conocer cómo podemos ayudarte!";

$m_canonical   		= '<link rel="canonical" href="https://c-financia.com" />';

$title_seo          = "Factoring y Financiamiento para empresas | C-Financia";

$menu_css 			= "-type-5";


$header 			= implode("", file("./templates/head.html"));
$preloader          = implode("", file("./templates/preloading.html"));
$headermenu          = implode("", file("./templates/menu.html"));


$footer 			= implode("", file("./templates/footer.html"));

$templateFinal 		= implode("", file("./templates/index-2.html"));



$templateFinal 		= str_replace("[HEADER]"   				, $header    				, $templateFinal);
$templateFinal 		= str_replace("[keywords]"   		    , $m_keywords    			, $templateFinal);
$templateFinal 		= str_replace("[meta_description]"      , $m_description			, $templateFinal);
$templateFinal 		= str_replace("[canonical]"      		, $m_canonical				, $templateFinal);
$templateFinal 		= str_replace("[TITLE]"      		    , $title_seo				, $templateFinal);

$templateFinal 		= str_replace("[FOOTER]"   				, $footer    				, $templateFinal);
$templateFinal 		= str_replace("[PRELOADER]"   			, $preloader    			, $templateFinal);
$templateFinal 		= str_replace("[HEADERMENU]"   			, $headermenu    			, $templateFinal);
$templateFinal 		= str_replace("[CSS_MENU]"   			, $menu_css    				, $templateFinal);

echo $templateFinal;

?>