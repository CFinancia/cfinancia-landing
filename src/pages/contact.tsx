import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import ContactArea from "../components/contact/contact-area";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";

export default function ContactPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Contact" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <Header/>
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Conócenos y escríbenos"
            subtitle="Obtén toda nuestra información y también puedes enviarnos un mensaje directamente desde aquí."
            page="Contáctanos"
            shape="/assets/images/shape/shape_26.svg"
          />
          {/* breadcrumb end */}

          {/* contact area start */}
          <ContactArea />
          {/* contact area end */}

          {/* news letter start */}
          <NewsletterBanner />
          {/* news letter end */}
        </main>

        {/* footer start */}
        <Footer/>
        {/* footer end */}
      </div>
    
    </Wrapper>
  );
}
