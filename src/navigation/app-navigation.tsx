import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";
import HomePageTwo from "../pages/home-2";
import ContactPage from "../pages/contact";
import BlogDetailsPage from "../pages/blog-details";
import NotFoundPage from "../pages/not-found";
import ServiceDetailsPage from "../pages/service-details";


export default function AppNavigation() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePageTwo />} />
        <Route path="/index" element={<HomePageTwo />} />
        <Route path="/servicios-factoring" element={<ServiceDetailsPage />} />
        <Route path="/blog-factoring/:id" element={<BlogDetailsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}