import { useEffect } from "react";
import { Info } from "../components/features/Info";
import Container from "../components/utils/Container";
import ProyectoCard from "../components/utils/ProyectoCard";
import { dataProyect } from "../helper/dataProyect";

export default function Proyectos() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-full min-h-dvh bg-white">
      <div className="w-full h-20"></div>
      <Container>
        <main className="w-full mt-10 space-y-10">
          <header className="space-y-2">
            <h1 className="text-3xl tracking-wider font-bold font-Ibrand text-gris-600">Proyectos</h1>
            <p className="text-gris-600">Comercial / Residencial / Coorporativo / Retail</p>
          </header>
          <main className="flex flex-wrap gap-y-6">
            {
              dataProyect.map((proyect, index) => {
                return (
                  <ProyectoCard proyect={proyect} key={index} />
                )
              })
            }
          </main>
        </main>
      </Container>
      <hr  className="border-4 border-rojo my-10" />
      <Info />
    </div>
  )
}
