import { SiBookstack } from 'react-icons/si';
import Laptop from '../../assets/layout/laptop.webp'
import { Image } from "@unpic/react";
import { Link } from 'react-router-dom';

export function Info() {
  return (
    <div className='w-full h-auto'>
      <div className='flex'>
        <div className='w-fit'>
          <Image
            src={Laptop}
            alt="Laptop"
            width={1200}
            height={1200}
            layout="constrained"
          />
        </div>
        <div className='w-full p-10 py-20 text-black space-y-20 flex flex-col justify-evenly'>
          <div className='flex gap-2 text-5xl'>
            <SiBookstack size={50} />
            <div className='space-y-10'>
              <p className='font-bold text-center'>Diseñemos juntos</p>
              <p className='text-center'>tu próximo proyecto. puedes</p>
              <p className='font-bold text-center'>mejorar eso?</p>
            </div>
          </div>
          <div className='flex justify-center gap-10'>
            <Link to="/proyectos" className="text-white bg-rojo px-4 py-1 rounded-md">
              Ver Nuestros Proyectos
            </Link>
            <Link to="/contacto" className="text-white bg-rojo px-4 py-1 rounded-md">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}