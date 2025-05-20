import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BlockFeatureOne from "../components/block-feature/block-feature-one";
import BlockFeatureThree from "../components/block-feature/block-feature-three";
import BlockFeatureTwo from "../components/block-feature/block-feature-two";
import HomeTwoBlogs from "../components/blogs/home-2-blogs";
import FancyBannerOne from "../components/fancy-banner/fancy-banner-one";
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-two";
import FaqSectionOne from "../components/faq/faq-section-one";
import FeedbackOne from "../components/feedback/feedback-one";
import HeroBannerTwo from "../components/hero-banner/hero-banner-2";
import TeamSectionOne from "../components/team/team-section-one";
import TextFeatureOne from "../components/text-feature/text-feature-one";
import FooterOne from "../layout/footer/footer-one";
import HeaderTwo from "../layout/header/header-two";
import TextFeatureNine from "@/components/text-feature/text-feature-nine";
import FeedbackFive from "@/components/feedback/feedback-five";
import Feedback from "react-bootstrap/esm/Feedback";
import FeedbackFour from "@/components/feedback/feedback-four";
import FeedbackSeven from "@/components/feedback/feedback-seven";
import FeedbackSix from "@/components/feedback/feedback-six";
import FeedbackThree from "@/components/feedback/feedback-three";
import FeedbackTwo from "@/components/feedback/feedback-two";
import FancyBannerNine from "@/components/fancy-banner/fancy-banner-nine";
import HeaderFour from "@/layout/header/header-four";
import HeaderFive from "@/layout/header/header-five";
import HeaderSix from "@/layout/header/header-six";



export default function HomePageTwo() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home 2" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
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
        <FooterOne/>
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
