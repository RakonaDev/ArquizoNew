import { Image } from "@unpic/react";
import { ProyectInterface } from "../../interfaces/ProyectInterface";
import { Link } from "react-router-dom";

export default function ProyectoCard({ proyect } : { proyect: ProyectInterface }) {
  return (
    <Link to={`/proyectos/${proyect.id}`} className="w-full max-w-[340px] h-auto">
      <Image
        src={proyect.images[proyect.imageSelected]}
        width={425}
        height={302}
        layout="constrained"
        className="max-w-[425px] w-full h-[302px] object-cover"
      />
      <p className="font-K2D text-xs mt-2">{proyect.categories}</p>
      <p className="font-K2D text-2xl font-bold">{proyect.name}</p>
    </Link>
  )
}
