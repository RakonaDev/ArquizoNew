import { ProyectInterface } from "../interfaces/ProyectInterface";
import Service1 from '../assets/services/service1.webp'
import Service2 from '../assets/services/service2.webp'
import Service3 from '../assets/services/service3.webp'

export const dataProyect: ProyectInterface[] = [
  {
    id: 1,
    name: 'Cuarto Pinky',
    categories: 'Interiorismo / Ejecución de Obras',
    description: 'Este dormitorio ha sido concebido para crear un ambiente armonioso, con una paleta de colores que mezcla el blanco y el rosado, aportando frescura y calidez al espacio. Las suaves tonalidades rosadas invitan al descanso, mientras que los acabados blancos mantienen la atmósfera luminosa y aireada, generando una sensación de amplitud y serenidad.El balcón se convierte en un espacio encantador, decorado con flores que aportan vida y color al entorno. Un cómodo sillón en el balcón invita a disfrutar de la vista y el aire libre, convirtiéndolo en un lugar ideal para relajarse. La integración de estos elementos exteriores con el interior refuerza la conexión con la naturaleza y amplifica la sensación de bienestar.Cada detalle ha sido pensado para crear un ambiente tranquilo y acogedor, donde la belleza y la funcionalidad se fusionan para ofrecer el refugio perfecto para el descanso.',
    slogan: 'Un Refugio de Confort y Estilo',
    images: [
      Service1,
    ]
  },
  {
    id: 2,
    name: 'Dormitorio Chacarilla',
    categories: 'Interiorismo / Ejecución de Obras',
    description: 'Un espacio donde la elegancia se fusiona con la modernidad en cada detalle. Las paredes blancas, en armonía con los tonos grises y negros, crean una atmósfera sofisticada y serena. El piso porcelánico tipo parquet gris ofrece calidez, mientras que el audaz toque de textura de concreto en una pared aporta un contraste único, otorgando carácter industrial y contemporáneo. El diseño abierto y fluido elimina barreras visuales, permitiendo que la amplitud del espacio se despliegue con total libertad, creando un ambiente accesible, acogedor y visualmente cautivador.',
    slogan: 'Elegancia y Modernidad en Cada Rincón',
    images: [
      Service2,
    ]
  },
  {
    id: 3,
    name: 'Tienda Kami',
    categories: 'Interiorismo / Ejecución de Obras',
    description: 'Una tienda de ropa especializada en moda femenina, donde el diseño de interiores refleja la esencia de la marca. Aplicamos su branding a través de un concepto que equilibra elegancia y simplicidad, creando un ambiente accesible, fluido y visualmente atractivo desde cualquier ángulo. Además, incorporamos una zona instagrameable, pensada para ofrecer una experiencia interactiva y reforzar la presencia de la marca en redes sociales.',
    slogan: 'Elegancia y Simplicidad en un Espacio de Moda',
    images: [
      Service3,
    ]
  }
]