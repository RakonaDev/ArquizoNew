import { Link } from "react-router-dom";
import SwiperDinamic from "../components/features/SwiperDynamic";
import Container from "../components/utils/Container";
import ServiceCard from "../components/utils/ServiceCard";
import { dataServices } from "../helper/dataServices";
import { dataSwiperHome } from "../helper/dataSwiper";
import { ServicesInterface } from "../interfaces/ServicesInterface";
import { IoIosArrowForward } from "react-icons/io";
import { dataProyect } from "../helper/dataProyect";
import { ProyectInterface } from "../interfaces/ProyectInterface";
import ProyectoCard from "../components/utils/ProyectoCard";
import { Image } from "@unpic/react";
import Hacemos1 from '../assets/hacemos/hacemos1.svg'
import Hacemos2 from '../assets/hacemos/hacemos2.svg'
import Hacemos3 from '../assets/hacemos/hacemos3.svg'
import Hacemos4 from '../assets/hacemos/hacemos4.svg'
import { Info } from "../components/features/Info";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="pb-10">
      <header className="w-full h-dvh relative">
        <SwiperDinamic data={dataSwiperHome} />
        <Container>
          <div className="absolute z-20 top-[50%] text-white">
            <h1 className="font-Ibrand text-medium text-3xl tracking-widest text-shadow-sm text-shadow-black">Comprometidos con el diseño consciente y funcional.</h1>
            <p className="text-sm">Diseño | Visión | Futuro</p>
          </div>
        </Container>
      </header>
      <main className="w-full py-10 bg-white text-black">
        <Container>
          <h2 className="text-center font-Ibrand font-bold text-3xl text-azul">
            Que servicios te ofrecemos?
          </h2>
        </Container>
        <hr className="border-4 border-rojo mt-10 mb-3" />
        <Container>
          <section className="flex flex-wrap gap-10">
            {
              dataServices.filter((dataService: ServicesInterface) => dataService.id <= 3).map((dataService: ServicesInterface, index: number) => {
                return (
                  <ServiceCard key={index} servicio={dataService} isHome={true} />
                )
              })
            }
          </section>
          <Link to="/servicios" className="text-azul flex gap-2 items-center mt-5 justify-end">
            <span className="text-base">
              Ver todos nuestros servicios
            </span>
            <span><IoIosArrowForward size={25} /></span>
          </Link>
        </Container>
        <Container>
          <h2 className="text-center text-3xl text-azul font-Ibrand mt-10 mb-10">Algunos de nuestros proyectos</h2>
          <section className="w-full flex flex-wrap gap-y-5 mb-6">
            {
              dataProyect.filter((dataProyect: ProyectInterface) => dataProyect.id <= 3).map((dataProyect: ProyectInterface, index: number) => {
                return (
                  <ProyectoCard key={index} proyect={dataProyect} />
                )
              })
            }
          </section>
          <Link to="/proyectos" className="text-azul flex gap-2 items-center mt-5 justify-end">
            <span className="text-base">
              Ver todos nuestros proyectos
            </span>
            <span><IoIosArrowForward size={25} /></span>
          </Link>
        </Container>
        <hr className="border-4 border-rojo mt-10" />
        <Container>
          <h1 className="text-center font-Ibrand font-bold text-3xl text-azul my-10">
            Cómo lo Hacemos ?
          </h1>
        </Container>
        <div className="flex">
          <div className="flex-grow p-10 bg-azul_oscuro-900 flex flex-col justify-center space-y-8">
            <Image
              src={Hacemos1}
              alt="Hacemos1"
              width={70}
              height={70}
              layout="constrained"
              className="mx-auto h-20"
            />
            <h3 className="font-Ibrand tracking-widest text-center text-white w-full h-12">ESTUDIO DE TERRENO Y VIABILIDAD ARQUITECTÓNICA</h3>
            <p className="font-Montserrat text-white text-center text-xs">Evaluamos la viabilidad de tu proyecto según las características del terreno y las normativas locales.</p>
          </div>
          <div className="flex-grow p-10 bg-azul_oscuro-800 flex flex-col justify-center space-y-8">
            <Image
              src={Hacemos2}
              alt="Hacemos1"
              width={70}
              height={70}
              layout="constrained"
              className="mx-auto h-20"
            />
            <h3 className="font-Ibrand tracking-widest text-center text-white w-full h-12">PLANIFICACIÓN Y DISEÑO PERSONALIZADO</h3>
            <p className="font-Montserrat text-white text-center text-xs">Desarrollamos un diseño a medida, optimizado para cumplir con tus expectativas y necesidades.</p>
          </div>
          <div className="flex-grow p-10 bg-azul_oscuro-700 flex flex-col justify-center space-y-8">
            <Image
              src={Hacemos3}
              alt="Hacemos1"
              width={70}
              height={70}
              layout="constrained"
              className="mx-auto h-20"
            />
            <h3 className="font-Ibrand tracking-widest text-center text-white w-full h-12">GESTIÓN ADMINISTRATIVA Y LICENCIAS</h3>
            <p className="font-Montserrat text-white text-center text-xs">Nos ocupamos de toda la gestión necesaria para obtener las licencias y permisos requeridos para tu obra.</p>
          </div>
          <div className="flex-grow p-10 bg-rojo flex flex-col justify-center space-y-8">
            <Image
              src={Hacemos4}
              alt="Hacemos1"
              width={70}
              height={70}
              layout="constrained"
              className="mx-auto h-20"
            />
            <h3 className="font-Ibrand tracking-widest text-center text-white w-full h-12">CUIDAMOS DE TU INVERSIÓN</h3>
            <p className="font-Montserrat text-white text-center text-xs">Nos encargamos de supervisar que el proyecto sea ejecutado de acuerdo con el diseño aprobado por ti.</p>
          </div>
        </div>
        <section>
          <Info />
        </section>
      </main>
      <section>
        <Container>
          <div className="space-y-7 text-azul">
            <h1 className="text-center font-Ibrand font-bold text-3xl text-azul">
              Quienes somos?
            </h1>
            <p className="text-center font-K2D">
              ARQUIZO es un estudio arquitectónico peruano con amplia experiencia en gestión de proyectos y saneamiento físico legal. Ofrecemos soluciones integrales en trámites, diseño arquitectónico y diseño de interiores, enfocándonos en cumplir con los más altos estándares técnicos, legales y estéticos. Nuestro compromiso es convertir las ideas de nuestros clientes en espacios funcionales y personalizados.
            </p>
            <div className="flex justify-end">
              <Link to="/nosotros" className="text-white bg-rojo px-4 py-1 rounded-md">
                Más Información
              </Link>
            </div>
          </div>

        </Container>
      </section>
    </div>
  )
}
