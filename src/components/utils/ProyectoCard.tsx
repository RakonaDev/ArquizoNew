import { Image } from "@unpic/react";
import { ProyectInterface } from "../../interfaces/ProyectInterface";

export default function ProyectoCard({ proyect } : { proyect: ProyectInterface }) {
  return (
    <div className="w-full max-w-[425px] h-auto">
      <Image
        src={proyect.images[0]}
        width={425}
        height={302}
        layout="constrained"
        className="max-w-[425px] w-full h-[302px] object-cover"
      />
      <p className="font-K2D text-xs mt-2">{proyect.categories}</p>
      <p className="font-K2D text-2xl font-bold">{proyect.name}</p>
    </div>
  )
}
