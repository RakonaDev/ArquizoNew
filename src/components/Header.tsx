import { Image } from '@unpic/react'
import Logo from '../assets/components/logo-arquizo.svg'
import Container from './utils/Container'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'

export default function Header() {
  return (
    <div className=''>
      <header className='w-full py-5 bg-[#303030] fixed top-0 z-50'>
        <Container>
          <div className='flex items-center justify-between'>
            <Link to='/' className='flex items-center justify-between'>
              <Image src={Logo} alt='Logo Arquizo' width={130} height={130} />
            </Link>
            <div className='flex items-center gap-5'>
              <Link to='/contacto' className='px-4 rounded-lg py-1 text-sm bg-rojo text-white'>Cuéntanos tu idea</Link>
              <Link to='/servicios' className='text-white'>Servicios</Link>
              <Link to='/nosotros' className='text-white'>Nosotros</Link>
              <Link to='/proyectos' className='text-white'>Proyectos</Link>
              <Link to='/contrato' className='text-white'>Trabaja con nosotros</Link>
              <nav className='items-center gap-2 hidden xl:flex'>
                <a href="#" className='text-white p-1 bg-black rounded-md hover:bg-rojo hover:text-white duration-500 transition-all' title='facebook'>
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className='text-white p-1 bg-black rounded-md hover:bg-rojo hover:text-white duration-500 transition-all' title='facebook'>
                  <FaInstagram size={14} />
                </a>
              </nav>
            </div>
          </div>
        </Container>
      </header>
    </div>
  )
}
