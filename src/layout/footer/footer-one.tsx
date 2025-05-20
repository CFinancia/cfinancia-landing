import { NavLink } from 'react-router-dom';
// internal
import FooterSocial from './footer-social';

const FooterOne = () => {
  return (
    <div className="footer-one">
    <div className="container">
      <div className="inner-wrapper">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-md-3 footer-intro mb-30">
            <div className="logo mb-15">
              <NavLink to="/" className="d-inline-block d-lg-none">
                <img src="/assets/images/logo/c-financia.svg" alt="logo"/>
              </NavLink>
            </div> 
            <p className="text-white lh-sm mb-35">C-financia <span className="opacity-50">obtén <br/> liquidez con tus facturas</span></p>
            {/* social link */}
            <ul className="style-none d-flex align-items-center social-icon">
             <FooterSocial/>
            </ul>
            {/* social link */}
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
            <h5 className="footer-title">Links</h5>
            <ul className="footer-nav-link style-none">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/pricing">Factoring</NavLink></li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
            <h5 className="footer-title">Nuestra Empresa</h5>
            <ul className="footer-nav-link style-none">
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/contact">Contáctanos</NavLink></li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
            <h5 className="footer-title">Servicio al Cliente</h5>
            <ul className="footer-nav-link style-none">
              <li><NavLink to="/contact">Contáctanos</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="bottom-footer">
        <div className="row align-items-center">
          <div className="col-lg-5 order-lg-last mb-15">
            <div className="footer-newsletter float-xl-end">
              <h5 className="footer-title">Subscribe Newsletter</h5>
              <form action="#">
                <input type="email" placeholder="Enter your email address"/>
                <button><i className="bi bi-arrow-right"></i></button>
              </form>
            </div>
          </div>
          <div className="col-lg-7 order-lg-first mb-15">
            <NavLink to="/" className="d-none d-lg-inline-block mb-25">
              <img src="/assets/images/logo/logo_01.svg" alt="logo"/>
            </NavLink>
            <div className="d-xl-flex align-items-center">
              <div className="copyright me-xl-4 lg-mt-10 order-lg-first">
                Financiamiento para todos - C-Financia by Cesionbnk.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FooterOne;