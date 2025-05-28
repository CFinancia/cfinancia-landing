import { Helmet } from "react-helmet-async";

// prop type 
type IProps = {
  title: string;
}
const SEOCom = ({ title }: IProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} | Factoring y Financiamiento para empresas` : 'Factoring y Financiamiento para empresas'}</title>
      <meta name="description" content="C-Financia | Factoring y Financiamiento para empresas" />
      <meta name="keywords" content="C-Financia | Factoring y Financiamiento para empresas" />
      <meta name="robots" content="INDEX,FOLLOW" />
    </Helmet>
  );
};

export default SEOCom;