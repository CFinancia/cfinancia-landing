<?php

$m_keywords = "Factoring en Colombia, Financiación empresarial Colombia, Flujo de caja factoring, Ventajas del factoring, Factoring sin recurso, Gestión de cuentas por cobrar, Capital de trabajo inmediato, Soluciones de liquidez empresarial, Factoring para PYMES, Servicios de factoraje Colombia.";
$m_description = "Descubre cómo el factoring se ha convertido en la clave para la financiación empresarial en Colombia. Acelera tu flujo de caja y estimula el crecimiento de tu empresa con esta solución financiera ágil. Explora las ventajas y el funcionamiento del factoring, y cómo puede ser el aliado perfecto para tu negocio.";

$m_canonical   		= '';
$title_seo          = "Factoring en Colombia: Impulso Financiero para empresas.";
$menu_css 			= "-type-5";


$header 			= implode("", file("./templates/head.html"));
$footer 			= implode("", file("./templates/footer.html"));
$preloader          = implode("", file("./templates/preloading.html"));
$headermenu          = implode("", file("./templates/menu.html"));
$templateFinal 		= implode("", file("./templates/factoring-para-empresas-colombianas.html"));

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