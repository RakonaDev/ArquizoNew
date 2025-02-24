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

export default function Home() {
  return (
    <div>
      <header className="w-full h-dvh relative">
        <SwiperDinamic data={dataSwiperHome} />
      </header>
      <main className="w-full py-10 bg-white text-black">
        <Container>
          <h1 className="text-center font-Ibrand font-bold text-3xl text-azul">
            Que servicios te ofrecemos?
          </h1>
        </Container>
        <hr className="border-4 border-rojo mt-10 mb-3" />
        <Container>
          <section className="flex flex-wrap gap-10">
            {
              dataServices.filter((dataService: ServicesInterface) => dataService.id <= 3).map((dataService: ServicesInterface, index: number) => {
                return (
                  <ServiceCard key={index} servicio={dataService} />
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
          <h2 className="text-center text-2xl font-K2D mt-10 font-medium mb-10">Algunos de nuestros proyectos</h2>
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
