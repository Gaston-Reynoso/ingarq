import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import Proyectos from "../pages/Proyectos";
import Sobre from "../pages/Sobre";
import Contacto from "../pages/Contacto";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        {/* <Route path="/proyectos" element={<Proyectos />} />*/ }
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
