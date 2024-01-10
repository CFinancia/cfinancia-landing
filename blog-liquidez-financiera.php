<?php
if (strpos($_SERVER['HTTP_HOST'], 'www.') === false) {
    $urlRedireccion = 'https://www.' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('Location: ' . $urlRedireccion, true, 301);
    exit();
}

$m_keywords = "Factoring Empresarial, Soluciones de Factoring, Financiamiento para Empresas, Liquidez Empresarial, Estrategias de Factoring, Mejora de Flujo de Caja, Factoring en Colombia, Gestión Financiera Empresarial, Anticipo de Facturas, Servicios de Factoring, Finanzas para Emprendedores, Crédito Comercial, Optimización de Recursos Empresariales, Factoring vs Préstamos Bancarios, Análisis Financiero Empresarial.";
$m_description= "Descubre estrategias de factoring y financiamiento en el blog de C-Financia. Consejos, guías y soluciones para mejorar la liquidez y el crecimiento empresarial.";

$m_canonical   		= '<link rel="canonical" href="https://turismoencasasyfincas.com" />';
$title_seo          = "C-Financia Blog - Expertos en Factoring y Finanzas Empresariales";
$menu_css 			= "-type-5";


$header 			= implode("", file("./templates/head.html"));
$footer 			= implode("", file("./templates/footer.html"));
$preloader          = implode("", file("./templates/preloading.html"));
$headermenu          = implode("", file("./templates/menu.html"));
$templateFinal 		= implode("", file("./templates/blog-liquidez-financiera.html"));

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