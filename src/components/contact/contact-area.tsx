import ContactForm from "../forms/contact-form";

// address block item
function AddressBlock({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="address-block-one text-center mb-40 wow fadeInUp">
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h5 className="title">{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
    </div>
  );
}

const ContactArea = () => {
  return (
    <div className="contact-us-section pt-150 lg-pt-80">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-12 m-auto">
              <div className="row">
                <div className="col-md-4">
                  <AddressBlock
                    icon="/assets/images/icon/icon_90.svg"
                    title="Oficina Principal"
                    subtitle="Carrera 16 # 93-11, piso 10 <br/>Bogotá, Colombia"
                  />
                </div>
                <div className="col-md-4">
                  <AddressBlock
                    icon="/assets/images/icon/icon_91.svg"
                    title="Teléfono de Contacto"
                    subtitle='+57 (1) 381 49 90 <br/><a href="#" className="call text-lg fw-500">+57 320 7202593</a>'
                  />
                </div>
                <div className="col-md-4">
                  <AddressBlock
                    icon="/assets/images/icon/icon_92.svg"
                    title="Soporte"
                    subtitle='soporte@c-financia.com <br/><a href="#" className="webaddress">www.c-financia.com/soporte</a>'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wrapper light-bg mt-80 lg-mt-40">
            <div className="row">
              <div className="col-lg-5">
                <div className="d-flex flex-column flex-lg-column-reverse">
                  <div className="row">
                    <div className="col-md-8 col-6 me-auto ms-auto">
                      <img
                        src="/assets/images/assets/ils_07.svg"
                        alt="icon"
                        className="lazy-img me-auto ms-auto"
                      />
                    </div>
                  </div>
                  <div className="title-one text-center text-lg-start md-mt-20 mb-70 md-mb-30">
                    <h2>¿Tienes alguna pregunta? Envíanos un mensaje</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-style-one ps-xl-5">
                  {/* form start */}
                  <ContactForm />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-banner mt-120 lg-mt-80">
        <div className="gmap_canvas h-100 w-100">
          <iframe
            className="gmap_iframe h-100 w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5310159768137!2d-74.05736113224587!3d4.677352631495534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a92b81bbb37%3A0x696b12127657c9c8!2zQ3JhLCAxNiAjOTMtMTEsIEJvZ290w6E!5e0!3m2!1ses!2sco!4v1748389911223!5m2!1ses!2sco"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
