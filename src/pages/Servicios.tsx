import { Image } from "@unpic/react";
import Banner from '../assets/pages/servicios/banner.webp'
import Container from "../components/utils/Container";
import { Info } from "../components/features/Info";
import { dataServices } from "../helper/dataServices";
import { ServicesInterface } from "../interfaces/ServicesInterface";
import ServiceCard from "../components/utils/ServiceCard";
import { useEffect } from "react";

export default function Servicios() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <header className="w-full h-[85dvh] relative">
        <Image src={Banner} alt="banner" width={1440} height={980} layout="constrained" className="w-full h-[85dvh] object-cover brightness-[.3]" />
        <Container>
          <div className="absolute z-20 top-[50%] text-white">
            <h1 className="font-Ibrand text-medium text-3xl tracking-widest text-shadow-sm text-shadow-black">Comprometidos con el diseño consciente y funcional.</h1>
            <p className="text-sm">Diseño | Visión | Futuro</p>
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <div className="w-full py-10">
            <h1 className="text-center font-Ibrand font-bold text-3xl text-azul">
              Nuestros Servicios
            </h1>
          </div>
        </Container>
        <hr className="border-4 border-rojo mb-3" />
        <section className="w-full py-10">
          <Container>
            <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(352px,_1fr))] gap-3 mb-6">
              {
                dataServices.map((dataService: ServicesInterface, index: number) => {
                  return (
                    <ServiceCard key={index} servicio={dataService} isHome={false} />
                  )
                })
              }
            </div>
          </Container>
        </section>
        <hr className="border-4 border-rojo mb-3" />
        <Info />
      </main>
    </div>
  )
}
