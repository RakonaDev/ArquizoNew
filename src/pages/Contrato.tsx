import Container from "../components/utils/Container";
import Aside from '../assets/pages/contrato/aside.webp'
import { Image } from "@unpic/react";
import { useEffect } from "react";

export default function Contrato() {
  useEffect(() => {
    window.scrollTo(0, 0)
  },  [])
  return (
    <div className="w-full min-h-dvh bg-white">
      <div className="w-full h-20"></div>
      <main className="mt-10">
        <Container>
          <div className="space-y-10">
            <h1 className="font-Ibrand text-gris-600 text-3xl text-center tracking-wider">Únete a Arquizo</h1>
            <p className="text-center text-gris-600">
              En ARQUIZO, valoramos el talento, la pasión y el compromiso de quienes forman parte de nuestro equipo. Si te apasiona la arquitectura, el diseño de interiores, los proyectos innovadores y el saneamiento físico-legal, y estás buscando un entorno donde puedas crecer profesionalmente y aportar ideas frescas, ¡nos encantaría conocerte!
              Si deseas formar parte de un estudio en constante evolución, orientado a la excelencia y a la innovación, completa el formulario de solicitud y únete a nosotros en ARQUIZO.
            </p>
            <div className="flex gap-10">
              <Image src={Aside} alt="Aside" width={1000} height={500} layout="constrained" className="w-1/2 h-full " />
              <div className="w-1/2 h-full flex justify-center items-center my-auto">
                <form className="space-y-4 bg-[#D9D9D9]/60 p-10 rounded-xl">
                  <div className="w-full flex gap-3">
                    <input type="text" name="nombres" id="nombres" placeholder="Nombres" className="w-1/2 bg-[#747474]/30 rounded-md py-2 px-4 shadow-md shadow-black/30 placeholder:text-white" />
                    <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos" className="w-1/2 bg-[#747474]/30 rounded-md py-2 px-4 shadow-md shadow-black/30 placeholder:text-white" />
                  </div>
                  <div className="w-full flex gap-3">
                    <input type="email" name="email" id="email" placeholder="Email" className="w-1/2 bg-[#747474]/30 rounded-md py-2 px-4 shadow-md shadow-black/30 placeholder:text-white" />
                    <input type="text" name="celular" id="celular" placeholder="Celular" className="w-1/2 bg-[#747474]/30 rounded-md py-2 px-4 shadow-md shadow-black/30 placeholder:text-white" />
                  </div>
                  <div>
                    <input type="text" name="direccion" id="direccion" placeholder="Dirección donde resides" className="w-full bg-[#747474]/30 rounded-lg py-2 px-4 shadow-md shadow-black/30 placeholder:text-white" />
                  </div>
                  <div>
                    <input type="text" name="puesto" id="puesto" placeholder="Puesto de interés" className="w-full bg-[#747474]/30 rounded-lg py-2 px-4 shadow-md shadow-black/30 placeholder:text-white" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="archivo">Adjuntar tu CV</label>
                    <label htmlFor="archivo" className="px-4 py-1 bg-[#8080805C] w-fit rounded-lg text-sm text-medium shadow-md shadow-black/30">Seleccionar Archivo</label>
                    <input type="file" name="archivo" id="archivo" className="hidden w-full bg-[#747474]/30 rounded-lg py-2 px-4 shadow-md shadow-black/30 placeholder:text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="aceptar" id="aceptar"  />
                    <label htmlFor="aceptar">Acepto los términos y condiciones</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}
