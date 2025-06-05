import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import BlockFeatureTen from "@/components/block-feature/block-feature-ten";
import FancyBannerSix from "@/components/fancy-banner/fancy-banner-six";
import FaqSectionOne from "@/components/faq/faq-section-one";
import FancyBannerTen from "@/components/fancy-banner/fancy-banner-ten";
import TextFeatureFive from "@/components/text-feature/text-feature-five";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";

export default function ServiceDetailsPage() {
  return (
    <Wrapper>
      {/* seo title */}
      <SEOCom title="Factoring empresarial" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <Header />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Factoring para empresas"
            subtitle="Optimiza tu flujo de efectivo al anticipar el pago de tus facturas pendientes, asegurando liquidez inmediata"
            page="Factoring"
            shape="/assets/images/shape/shape_25.svg"
            bg_img="/assets/images/media/img_32.jpg"
            style_2={true}
            cls="me-xl-4"
          />
          {/* breadcrumb end */}

          {/* text feature start */}
          <TextFeatureFive />
          {/* text feature end */}

          {/* block feature start */}
          <BlockFeatureTen />
          {/* block feature end */}
          
          {/* fancy banner start */}
          <FancyBannerSix />
          {/* fancy banner end */}

          {/* fancy banner ten start */}
          <FancyBannerTen />
          {/* fancy banner ten end */}

          {/* faq section start */}
          <FaqSectionOne />
          {/* faq section end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner />
          {/* news letter end */}
        </main>

        {/* footer start */}
        <Footer />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
