<?php
if (strpos($_SERVER['HTTP_HOST'], 'www.') === false) {
    $urlRedireccion = 'https://www.' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('Location: ' . $urlRedireccion, true, 301);
    exit();
}

$m_keywords = "Factoring, Financiamiento empresarial, Liquidez para empresas, Crédito para empresas, Anticipo de facturas, Capital de trabajo, Soluciones financieras, C-Financia";

$m_description = "C-Financia te brinda soluciones financieras especializadas en factoring para empresas. Obtén financiamiento inmediato a través del anticipo de facturas y asegura la liquidez que tu negocio necesita. ¡Contáctanos ahora para potenciar tu empresa!";

$title_seo = "Contacto | Factoring para Empresas | Anticipo de Facturas | C-Financia";



$m_canonical   		= '<link rel="canonical" href="https://c-financia.com" />';


$menu_css 			= "-type-5";


$header 			= implode("", file("./templates/head.html"));
$footer 			= implode("", file("./templates/footer.html"));
$preloader          = implode("", file("./templates/preloading.html"));
$headermenu          = implode("", file("./templates/menu.html"));
$templateFinal 		= implode("", file("./templates/contact.html"));

$templateFinal 		= str_replace("[HEADER]"   				, $header    				, $templateFinal);
$templateFinal 		= str_replace("[keywords]"   		    , $m_keywords    			, $templateFinal);
$templateFinal 		= str_replace("[meta_description]"      , $m_description			, $templateFinal);
$templateFinal 		= str_replace("[canonical]"      		, $m_canonical				, $templateFinal);
$templateFinal 		= str_replace("[TITLE]"      		    , $title_seo				, $templateFinal);

$templateFinal 		= str_replace("[CALENDAR]"   		    , $calendar    			    , $templateFinal);

$templateFinal 		= str_replace("[FOOTER]"   				, $footer    				, $templateFinal);
$templateFinal 		= str_replace("[PRELOADER]"   			, $preloader    			, $templateFinal);
$templateFinal 		= str_replace("[HEADERMENU]"   			, $headermenu    			, $templateFinal);
$templateFinal 		= str_replace("[CSS_MENU]"   			, $menu_css    				, $templateFinal);


$templateFinal 		= str_replace("[MENU_5]"   			 	, $menu_categorias_3  		, $templateFinal);
$templateFinal 		= str_replace("[MENU_6]"   				, $menu_cat_mobile_3  		, $templateFinal);

$templateFinal 		= str_replace("[MENU_7]"   			 	, $menu_categorias_4  		, $templateFinal);
$templateFinal 		= str_replace("[MENU_8]"   				, $menu_cat_mobile_4  		, $templateFinal);

$templateFinal 		= str_replace("[BUSCADOR_DESTINOS]"  	, $buscador_destino 		, $templateFinal);
$templateFinal 		= str_replace("[DESTINO_PRINCIPAL]"  	, $d_principal	    		, $templateFinal);
$templateFinal 		= str_replace("[DESTINO_PRINCIPAL2]"  	, $d_principal2	    		, $templateFinal);
$templateFinal 		= str_replace("[DESTINO_PRINCIPAL3]"  	, $d_principal3	    		, $templateFinal);

$templateFinal 		= str_replace("[RECOMENDADAS]"  	 	, $recomendadas	    		, $templateFinal);

$templateFinal 		= str_replace("[REDES]"   				, $redes    				, $templateFinal);

echo $templateFinal;

?>