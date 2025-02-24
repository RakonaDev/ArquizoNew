import { Image } from "@unpic/react";
import { ServicesInterface } from "../../interfaces/ServicesInterface";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ServiceCard({ servicio }: { servicio: ServicesInterface}) {
  return (
    <div className="max-w-[352px] w-full h-[441px] relative flex items-end group overflow-hidden">
      <div className="absolute px-10 z-20 top-0 left-0 w-full h-full bg-azul/90 translate-x-[100%] group-hover:translate-x-0 transition-all duration-500 flex flex-col justify-evenly items-end">
        <h1 className="font-Ibrand text-end text-white text-xl tracking-widest">{ servicio.name }</h1>
        <Link to={`/servicios/${servicio.id}`} className="text-white text-base flex gap-2 items-center bg-rojo px-4 py-1 rounded-md">
          <span>Ver más</span>
          <span><FaArrowRightLong size={16} /></span>
        </Link>
      </div>
      <Image 
        src={servicio.image}
        width={1440}
        height={980}
        layout="constrained"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="relative z-10 pb-10 px-5 group-hover:opacity-0 transition-all duration-500">
        <h1 className="font-Ibrand text-white text-xl tracking-widest">{servicio.name}</h1>
      </div>
    </div>
  )
}
