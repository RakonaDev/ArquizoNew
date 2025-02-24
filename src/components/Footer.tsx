import Container from "./utils/Container";
import Logo from '../assets/components/logo.webp'
import { Image } from "@unpic/react";
import { dataServices } from "../helper/dataServices";
import { ServicesInterface } from "../interfaces/ServicesInterface";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-[#303030] py-10 mt-10">
      <Container>
        <div className="w-full flex ">
          <div className="w-1/3 space-y-6">
            <h1 className="text-white font-Ibrand text-lg tracking-widest">CONTÁCTANOS</h1>
            <div className="text-white text-sm font-Montserrat space-y-2">
              <p>Tel: <a href="tel:+51952346734">952 346 734</a></p>
              <p>Email: <a href="mailto:info@arquizo.com">info@arquizo.com</a></p>
              <p>www.arquizo.com</p>
            </div>
            <Image src={Logo} width={130} height={130} layout="constrained" />
          </div>
          <div className="w-1/3 space-y-6">
            <h1 className="text-white font-Ibrand text-lg tracking-widest">SERVICIOS</h1>
            <div className="space-y-3 flex flex-col">
              {
                dataServices.map((dataService: ServicesInterface, index: number) => {
                  return (
                    <Link to={`/servicios/${dataService.id}`} key={index} className="text-white text-xs font-Montserrat">
                      {dataService.name}
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="w-full py-10 flex justify-between">
          <p className="text-sm text-white font-Montserrat">By Arquizo. 2024 © Reservados todos los derechos.</p>
          <nav className='flex items-center gap-2'>
            <a href="#" className='text-white p-1 bg-black rounded-md hover:bg-rojo hover:text-white duration-500 transition-all' title='facebook'>
              <FaFacebookF size={14} />
            </a>
            <a href="#" className='text-white p-1 bg-black rounded-md hover:bg-rojo hover:text-white duration-500 transition-all' title='facebook'>
              <FaInstagram size={14} />
            </a>
            <a href="#" className='text-white p-1 bg-black rounded-md hover:bg-rojo hover:text-white duration-500 transition-all' title='facebook'>
              <FaTiktok size={14} />
            </a>
            <a href="#" className='text-white p-1 bg-black rounded-md hover:bg-rojo hover:text-white duration-500 transition-all' title='facebook'>
              <FaYoutube size={14} />
            </a>
          </nav>
        </div>
      </Container>
    </div>
  )
}
