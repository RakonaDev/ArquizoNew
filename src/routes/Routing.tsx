import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home";
import Contrato from "../pages/Contrato";
import Servicios from "../pages/Servicios";
import Nosotros from "../pages/Nosotros";
import Proyectos from "../pages/Proyectos";
import Contacto from "../pages/Contacto";
import ServicioPorID from "../pages/ServicioPorID";
import ProyectoPorID from "../pages/ProyectoPorID";


export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PublicLayout /> } >
          <Route index element={ <Home /> } />
          <Route path="contrato" element={ <Contrato /> } />
          <Route path="servicios" element={ <Servicios /> } />
          <Route path="servicios/:id" element={ <ServicioPorID /> } />
          <Route path="nosotros" element={ <Nosotros /> } />
          <Route path="proyectos" element={ <Proyectos /> } />
          <Route path="proyectos/:id" element={ <ProyectoPorID /> } />
          <Route path="contacto" element={ <Contacto /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
