import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BlockFeatureOne from "../components/block-feature/block-feature-one";
import BlockFeatureThree from "../components/block-feature/block-feature-three";
import BlockFeatureTwo from "../components/block-feature/block-feature-two";
import HomeTwoBlogs from "../components/blogs/home-2-blogs";
import FancyBannerOne from "../components/fancy-banner/fancy-banner-one";
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-two";
import FaqSectionOne from "../components/faq/faq-section-one";
import HeroBannerTwo from "../components/hero-banner/hero-banner-2";
import TextFeatureOne from "../components/text-feature/text-feature-one";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import TextFeatureNine from "@/components/text-feature/text-feature-nine";
import FancyBannerNine from "@/components/fancy-banner/fancy-banner-nine";



export default function Home() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom
        title="C-Financia"
        url="https://cfinancia.com/"
      />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <Header />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <HeroBannerTwo />
          {/* hero banner end */}

          {/* fancy banner one start */}
          <FancyBannerOne />
          {/* fancy banner one end */}

          {/* block feature one start */}
          <BlockFeatureOne />
          {/* block feature one end */}

          {/* text feature one start */}
          <TextFeatureOne/>
          {/* text feature one end */}

          {/* block feature two start */}
          <BlockFeatureTwo />
          {/* block feature two end */}

          {/* block feature three start */}
          <BlockFeatureThree />
          {/* block feature three end */}

          {/* fancy banner two start */}
          <FancyBannerNine />
          {/* fancy banner two end */}

          {/* text feature nine start */}
          <TextFeatureNine/>
          {/* text feature nine end */}

          {/* faq section start */}
          <FaqSectionOne />
          {/* faq section end */}

          {/* blog item start */}
          <HomeTwoBlogs/>
          {/* blog item end */}

          {/* fancy banner two start */}
          <FancyBannerTwo />
          {/* fancy banner two end */}
        </main>

        {/* footer start */}
        <Footer/>
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
