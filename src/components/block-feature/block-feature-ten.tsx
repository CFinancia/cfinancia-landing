

// card item
function CardItem({icon,title,subtitle}:{icon:string;title:string;subtitle:string}) {
  return (
    <div className="card-style-sixteen d-flex mt-60 lg-mt-40 mb-60 lg-mb-10">
      <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <div className="text">
        <h4 className="fw-bold mb-20 sm-mb-10">{title}</h4>
        <p className="m0">{subtitle}</p>
      </div>
    </div>
  );
}

const BlockFeatureTen = () => {
  return (
    <div className="block-feature-ten position-relative mt-150 lg-mt-80 pb-100 lg-pb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 wow fadeInUp">
            <div className="title-one mb-50 lg-mb-20">
              <h2>Beneficios del factoring</h2>
            </div>
          </div>
        </div>
        <div className="line-wrapper position-relative">
          <div className="row gx-lg-5">
            <div className="col-xl-4 col-md-6 wow fadeInUp">
              <CardItem
                icon="/assets/images/icon/icon_62.svg"
                title="Flujo de Efectivo Continuo"
                subtitle="Recibe pagos anticipados por tus facturas, asegurando un flujo de efectivo constante."
              />
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <CardItem
                icon="/assets/images/icon/icon_63.svg"
                title="Optimización de Recursos"
                subtitle="Libera capital al externalizar el cobro, enfócate en el crecimiento de tu empresa."
              />
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <CardItem
                icon="/assets/images/icon/icon_64.svg"
                title="Reducción de Riesgos"
                subtitle="Minimiza riesgos al transferir la responsabilidad crediticia al servicio de factoring."
              />
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp">
              <CardItem
                icon="/assets/images/icon/icon_65.svg"
                title="Agilidad en Financiamiento"
                subtitle="Accede rápidamente a fondos sin trámites complicados."
              />
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <CardItem
                icon="/assets/images/icon/icon_66.svg"
                title="Descuentos por Volumen"
                subtitle="Obtén tasas preferenciales según el monto y volumen de tus facturas."
              />
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <CardItem
                icon="/assets/images/icon/icon_67.svg"
                title="Asesoramiento Profesional"
                subtitle="Recibe asesoría para optimizar tus cuentas por cobrar y mejorar tu salud financiera."
              />
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/images/shape/shape_05.svg" alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default BlockFeatureTen;
