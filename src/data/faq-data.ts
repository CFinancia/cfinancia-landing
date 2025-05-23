export type IFaq = {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
};

const faq_data: IFaq[] = [
  {
    id: "One",
    title: "¿Qué es el factoring y cómo funciona en Colombia?",
    desc: "El factoring es un servicio financiero en el cual una empresa (cedente) vende sus facturas pendientes a una entidad financiera, como C-Financia, a cambio de un anticipo de efectivo. En Colombia, el factoring es una solución ampliamente utilizada para mejorar la liquidez de las empresas y acelerar el flujo de efectivo.",
    isShow: true,
  },
  {
    id: "Two",
    title: "¿Cuáles son los beneficios del factoring para las empresas en Colombia?",
    desc: "Los beneficios del factoring en Colombia incluyen el acceso rápido a efectivo, la mejora de la liquidez, la reducción del riesgo crediticio y la externalización de la gestión de cuentas por cobrar. También puede ayudar a las empresas a financiar su crecimiento y operaciones sin incurrir en deudas adicionales.",
  },
  {
    id: "Three",
    title: "¿Cuáles son los requisitos para solicitar factoring?",
    desc: "Los requisitos varían según la entidad financiera, pero generalmente se requieren facturas comerciales válidas y documentos que respalden la transacción. En C-Financia, simplificamos el proceso para que sea lo más accesible posible para las empresas colombianas.",
  },
  {
    id: "Four",
    title: "¿Cuánto tiempo suele tomar el proceso de aprobación y desembolso en el factoring?",
    desc: "El tiempo de aprobación y desembolso puede variar, pero en C-Financia, trabajamos de manera eficiente para proporcionar respuestas rápidas. En muchos casos, los fondos pueden estar disponibles en un plazo de 24 a 48 horas después de la aprobación.",
  },
  {
    id: "Five",
    title: "¿Qué diferencia a C-Financia de otras empresas de factoring en Colombia?",
    desc: "C-Financia se distingue por su enfoque en la atención al cliente, la flexibilidad en los servicios de factoring y la agilidad en la toma de decisiones. Nuestro compromiso es brindar soluciones financieras a medida para las empresas colombianas, adaptándonos a tus necesidades específicas.",
  },
];

export default faq_data;
