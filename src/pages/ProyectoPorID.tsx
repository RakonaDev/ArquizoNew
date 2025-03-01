import { useParams } from "react-router-dom";
import { convertirACadenaTitulo } from "../logic/converterToTile";
import { useEffect, useState } from "react";
import { ProyectInterface } from "../interfaces/ProyectInterface";
import { dataProyect } from "../helper/dataProyect";
import { Image } from "@unpic/react";
import Container from "../components/utils/Container";
import { Info } from "../components/features/Info";

export default function ProyectoPorID() {
  const [proyectSelected, setProyectSelected] = useState<ProyectInterface>();
  const { id } = useParams();
  console.log(convertirACadenaTitulo(id || ''));
  useEffect(() => {
    window.scrollTo(0, 0)
    setProyectSelected(dataProyect.find(proyect => proyect.id === Number(id)))
  }, [id])
  return (
    <div className="w-full h-auto space-y-10 overflow-x-hidden">
      <header className="w-full h-dvh relative">
        <Image
          src={proyectSelected?.images[proyectSelected?.imageSelected] ?? ''}
          width={1440}
          height={800}
          layout="constrained"
          className="w-full h-dvh object-cover brightness-75"
        />
        <Container>
          <div className="w-full absolute bottom-10 z-10 py-10 text-white">
            <h1 className="text-5xl font-K2D">{proyectSelected?.name}</h1>
            <p className="font-K2D">{proyectSelected?.categories}</p>
          </div>
        </Container>
      </header>
      <main className="">
        <Container>
          <div className="w-full space-y-8 mt-6">
            <h2 className="font-Montserrat text-2xl font-bold text-gris-700">{proyectSelected?.slogan}</h2>
            <p className="text-gris-700 text-justify">{proyectSelected?.description}</p>
            <div className="mt-6 grid place-content-center grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(600px,_1fr))] gap-4">
              {
                proyectSelected?.images.map((image, index) => {
                  return (
                    <Image
                      src={image}
                      width={624}
                      height={600}
                      layout="constrained"
                      className="h-full object-cover"
                      key={index}
                    />
                  )
                })
              }
            </div>
          </div>
        </Container>
      </main>
      <hr className="border-4 border-rojo w-full my-10" />
      <Info />
    </div>
  )
}
