import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import HeaderTwo from "../layout/header/header-two";
import blog_data from "../data/blog-data";
import BlogDetailsArea from "../components/blogs/blog-details/blog-details-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FooterOne from "@/layout/footer/footer-one";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blog_data.find((b) => Number(b.id) === Number(id));

  useEffect(() => {
    if (!blog) {
      navigate("/not-found");
    }
  }, [blog, navigate]);

  return (
    <Wrapper>
      {/* seo title */}
      <SEOCom title="Blog Details" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          {id == "1" ? (
            <BreadcrumbOne
              title="¿Qué es el factoring?"
              subtitle="Descifrando el Factoring: Una Guía Completa para Entender este Servicio de Financiamiento Empresarial."
              page="Blog"
              bg_img="/assets/images/blog/blog_img_03.jpg"
              style_2={false}
              shape="/assets/images/shape/shape_26.svg"
            />
          ) : (
            <BreadcrumbOne
              title="Artículo de finanzas"
              subtitle="Cómo Mejorar la Liquidez Empresarial: Estrategias Prácticas para Empresas Colombianas"
              page="Blog"
              bg_img="/assets/images/blog/blog_img_04.jpg"
              style_2={false}
              shape="/assets/images/shape/shape_26.svg"
            />
          )}

          {/* breadcrumb end */}

          {/* blog details area start */}
          {blog ? (
            <BlogDetailsArea blog={blog} />
          ) : (
            <div className="container">
              <div className="mt-80 mb-80 text-center">
                <h3>Not Found Any blog this id {id}</h3>
              </div>
            </div>
          )}
          {/* blog details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner />
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
