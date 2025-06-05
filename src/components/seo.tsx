// import { Helmet } from "react-helmet-async";

// // prop type 
// type IProps = {
//   title: string;
// }
// const SEOCom = ({ title }: IProps) => {
//   return (
//     <Helmet>
//       <meta charSet="utf-8" />
//       <title>{title ? `${title} | Factoring y Financiamiento para empresas` : 'Factoring y Financiamiento para empresas'}</title>
//       <meta name="description" content="C-Financia | Factoring y Financiamiento para empresas" />
//       <meta name="keywords" content="C-Financia | Factoring y Financiamiento para empresas" />
//       <meta name="robots" content="INDEX,FOLLOW" />
//     </Helmet>
//   );
// };

// export default SEOCom;

import { Helmet } from "react-helmet-async";

type IProps = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
};

const SEOCom = ({
  title,
  description = "Obtén financiamiento empresarial inmediato con C-Financia. Adelanta hasta el 90% del valor de tus facturas en 24h sin deuda ni garantías.",
  keywords = "factoring, financiamiento, empresas, anticipo de facturas, liquidez",
  image = "https://cfinancia.com/assets/images/media/seo.png", // Ajusta con la URL real de una imagen
  url = "https://cfinancia.com",
}: IProps) => {
  const fullTitle = `${title} | Factoring y Financiamiento para empresas`;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph para redes sociales */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOCom;
