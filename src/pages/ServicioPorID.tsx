import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ServicesInterface } from "../interfaces/ServicesInterface";
import { dataServices } from "../helper/dataServices";
import Container from "../components/utils/Container";
import { Info } from "../components/features/Info";

export default function ServicioPorID() {
  const [serviceSelected, setServiceSelected] = useState<ServicesInterface>();
  const { id } = useParams();
  useEffect(() => {
    setServiceSelected(dataServices.find(service => service.id === Number(id)))
    window.scrollTo(0, 0)
  }, [id])
  return (
    <div>
      <div className="w-full h-[4.3rem] bg-black"></div>
      <main className="w-full h-auto">
        <Container>
          <div className="w-full space-y-10 mt-6">
            <h1 className=" text-3xl font-Ibrand text-gris-600 tracking-wider">{serviceSelected?.name}</h1>
            <div className={`w-full h-auto flex ${serviceSelected?.fullWidth ? 'flex-col' : 'flex-row'}`}>
              <div className={`${ serviceSelected?.fullWidth ? 'w-full' : 'w-1/3'} h-auto`}>
                <img src={serviceSelected?.image} alt="service" className="w-full h-auto object-cover" />
              </div>
              <div className={`${serviceSelected?.fullWidth ? 'w-full' : 'w-2/3'} bg-gris-200 pt-10 px-10 pb-20 relative`}>
                <div dangerouslySetInnerHTML={{ __html: serviceSelected?.description ?? '' }} className="text-gris-700"></div>
                <div className="w-full bg-black/50 flex bottom-0 absolute right-0">
                  <div className="w-full flex items-center justify-center">
                    <p className="text-white font-Ibrand text-center tracking-widest">{serviceSelected?.slogan}</p>
                  </div>
                  <div className="h-10 w-10 bg-rojo"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <hr className="border-4 border-rojo w-full my-10" />
      <Info />
    </div>
  )
}
