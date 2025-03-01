import { Info } from "../components/features/Info";
import Container from "../components/utils/Container";
import Hero1 from '../assets/heros/hero1.webp'
import Hero2 from '../assets/heros/hero2.webp'
import { Image } from "@unpic/react";
import { useEffect } from "react";

export default function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="w-full h-[4.5rem]"></div>
      <main className="w-full h-auto">
        <Container>
          <div className="py-10 space-y-8">
            <h1 className="text-gris-600 text-3xl font-Ibrand font-medium tracking-wide">Nosotros</h1>
            <p className="text-gris-500 text-center ">En ARQUIZO, impulsamos el crecimiento profesional, la innovación y los logros de nuestros colaboradores para contribuir al progreso de la arquitectura peruana.</p>
            <section className="grid w-full h-auto gap-3 justify-items-center grid-cols-12">
              <div className="p-8 bg-gris-200 col-span-6 text-lg flex justify-center items-center">
                <p className="text-justify text-gris-500">
                  ARQUIZO es un estudio arquitectónico peruano con amplia experiencia en gestión de proyectos y saneamiento físico legal. Ofrecemos soluciones integrales en trámites, diseño arquitectónico y diseño de interiores, enfocándonos en cumplir con los más altos estándares técnicos, legales y estéticos.
                  Nuestro compromiso es convertir las ideas de nuestros clientes en espacios funcionales y personalizados.
                </p>
              </div>
              <div className="w-[301px] h-[431px] relative col-span-3">
                <Image src={Hero1} alt="hero1" layout="fullWidth" className="w-[301px] h-[431px] object-cover grayscale" />
                <div className="w-full absolute bottom-0 z-10 flex">
                  <div className="w-4/5 bg-black/40 px-3 py-1 h-[3.5rem] flex items-center">
                    <p className="text-white font-Ibrand tracking-widest">
                      KIMBERLY LAGUNA PECHO
                    </p>
                  </div>
                  <div className="w-1/5 bg-rojo py-3"></div>
                </div>
              </div>
              <div className="w-[301px] h-[431px] relative col-span-3">
                <Image src={Hero2} alt="hero2" layout="fullWidth" className="w-[301px] h-[431px] object-cover grayscale" />
                <div className="w-full absolute bottom-0 z-10 flex">
                  <div className="w-4/5 bg-black/40 px-3 py-1 h-[3.5rem] flex items-center">
                    <p className="text-white font-Ibrand tracking-widest">
                      MAYCKOL MORI RIOS
                    </p>
                  </div>
                  <div className="w-1/5 bg-rojo py-3"></div>
                </div>
              </div>
            </section>
            <section className="w-full flex gap-10">
              <div className="text-gris-700 w-1/2 space-y-6">
                <h2 className="text-4xl tracking-wider font-Ibrand">Misión</h2>
                <p className="text-justify">Ofrecer soluciones arquitectónicas integrales, combinando innovación, sostenibilidad y excelencia técnica en saneamiento físico legal, trámites y diseño, para crear espacios funcionales y estéticamente atractivos.</p>
              </div>
              <div className="text-gris-700 w-1/2 space-y-6">
                <h2 className="text-4xl tracking-wider font-Ibrand">Visión</h2>
                <p>Ser líderes en el sector arquitectónico peruano, reconocidos por transformar espacios con un enfoque legal, funcional y de diseño, promoviendo sostenibilidad y mejorando la calidad de vida en las comunidades.</p>
              </div>
            </section>
            <section className="text-gris-700 space-y-6 pb-10">
              <h2 className="text-4xl tracking-wider font-Ibrand">Propósito</h2>
              <p>Transformar espacios a través de soluciones arquitectónicas que integren legalidad, funcionalidad y diseño, contribuyendo al desarrollo sostenible y al bienestar de las personas, mientras facilitamos el crecimiento de las comunidades y empresas mediante nuestros servicios especializados.</p>
            </section>
          </div>
        </Container>
        <hr className="border-4 border-rojo w-full" />
        <div className="w-full h-auto">
          <Info />
        </div>
      </main>
    </>
  )
}
