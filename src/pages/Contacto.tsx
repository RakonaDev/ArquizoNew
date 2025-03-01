import { useEffect } from "react"
import Aside from '../assets/pages/contacto/aside.png'
import Container from "../components/utils/Container"
import { Image } from "@unpic/react"
import { useFormik } from "formik"
import { FaWhatsapp } from "react-icons/fa6"
import { MdOutlineMailOutline } from "react-icons/md"

export default function Contacto() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {
    handleBlur,
    handleSubmit,
    //values,
    handleChange,
    //errors,
  } = useFormik({
    initialValues: {
      nombres: '',
      apellidos: '',
      email: '',
      celular: '',
      empresa: '',
      direccion: '',
      mensaje: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <div className="w-full min-h-dvh bg-gris-700 ">
      <Container>
        <div className="w-full h-dvh bg-gris-700 flex gap-10 pt-20">
          <div className="w-1/2">
            <Image src={Aside} alt="Aside" width={500} height={500} layout="constrained" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex items-center">
            <div className="w-full">
              <h1 className="font-Ibrand text-rojo text-5xl tracking-wider pb-10">Contacto</h1>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="flex gap-3 font-medium">
                  <input type="text" name="nombres" id="nombres" placeholder="Nombres" className="w-full rounded-md py-2 px-4 shadow-md bg-[#FFFFFFB8] placeholder:text-gris-700" onChange={handleChange} onBlur={handleBlur}/>
                  <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos" className="w-full bg-[#FFFFFFB8] rounded-md py-2 px-4 shadow-md shadow-black/30 placeholder:text-gris-700" onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className="flex gap-3 font-medium">
                  <input type="email" name="email" id="email" placeholder="Email" className="w-full bg-[#FFFFFFB8] rounded-md py-2 px-4 shadow-md shadow-black/30 placeholder:text-gris-700" onChange={handleChange} onBlur={handleBlur} />
                  <input type="text" name="celular" id="celular" placeholder="Celular" className="w-full bg-[#FFFFFFB8] rounded-md py-2 px-4 shadow-md shadow-black/30 placeholder:text-gris-700" onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className="font-medium">
                  <input type="text" name="direccion" id="direccion" placeholder="Dirección donde resides" className="w-full bg-[#FFFFFFB8] rounded-lg py-2 px-4 shadow-md shadow-black/30 placeholder:text-gris-700" onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className="font-medium">
                  <textarea placeholder="Mensaje" cols={10} rows={5} name="mensaje" id="mensaje" className="w-full bg-[#FFFFFFB8] rounded-lg py-2 px-4 shadow-md shadow-black/30 placeholder:text-gris-700 resize-none" onChange={handleChange} onBlur={handleBlur}></textarea>
                </div>
                <div className="w-full flex justify-end gap-3">
                  <a href="http://wa.link" title="whatsapp" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium flex gap-2 items-center">
                    <span><FaWhatsapp size={20} /></span>
                    <span>Enviar Datos al Whatsapp</span>
                  </a>
                  <button title="boton" type="submit" className="w-fit bg-rojo rounded-lg py-2 px-4 shadow-md shadow-black/30 text-white font-medium flex gap-2 items-center" >
                    <span><MdOutlineMailOutline size={20} /></span>
                    <span>Enviar Datos</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
