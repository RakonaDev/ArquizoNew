import { ServicesInterface } from "../interfaces/ServicesInterface";
import Service1 from '../assets/services/service1.webp'
import Service2 from '../assets/services/service2.webp'
import Service3 from '../assets/services/service3.webp'
import Service4 from '../assets/services/service4.webp'
import Service5 from '../assets/services/service5.webp'
import Service6 from '../assets/services/service6.webp'
import Service7 from '../assets/services/service7.webp'
import Service8 from '../assets/services/service8.webp'
import Service9 from '../assets/services/service9.webp'
import Service10 from '../assets/services/service10.webp'


export const dataServices: ServicesInterface[] = [
  {
    id: 1,
    name: 'Arquitectura comercial',
    description: '<p>En ARQUIZO, combinamos ingeniería y arquitectura para diseñar soluciones innovadoras y funcionales. Nuestro equipo altamente capacitado transforma ideas en espacios únicos, cuidando cada detalle desde la conceptualización hasta la ejecución.</p><p>Con experiencia en proyectos complejos, garantizamos calidad, eficiencia y diseños que maximizan funcionalidad e impacto.</p>',
    slogan: 'Creamos espacios que inspiran y funcionan',
    image: Service1
  },
  {
    id: 2,
    name: 'Interiorismo',
    description: '<p>En ARQUIZO, creamos espacios interiores que combinan estilo, funcionalidad y personalidad. Nuestro equipo de expertos en interiorismo convierte tus ideas en ambientes únicos, diseñados para inspirar y adaptarse a tus necesidades.</p><p>Desde la selección de materiales hasta los detalles finales, nos aseguramos de que cada proyecto refleje tu esencia y optimice cada rincón.</p>',
    slogan: 'Diseñamos interiores que transforman',
    image: Service2
  },
  {
    id: 3,
    name: 'Oficinas y retail',
    description: '<p>En ARQUIZO, diseñamos espacios que no solo funcionan, sino que cuentan historias. Nuestras oficinas y locales comerciales están pensados para maximizar la productividad y brindar experiencias únicas, reflejando la esencia de tu marca en cada detalle.</p><p>Integramos diseño interior con estrategias de branding, creando ambientes que conectan con las emociones de las personas y fortalecen la identidad de tu negocio.</p>',
    slogan: 'Diseñamos productos que se adapten a tus necesidades',
    image: Service3
  },
  {
    id: 4,
    name: 'Servicios Generales',
    description: '<p>En ARQUIZO, ofrecemos soluciones integrales para garantizar la seguridad, funcionalidad y calidad de tus proyectos. Nuestro equipo especializado trabaja con precisión y compromiso en cada aspecto, cumpliendo con los estándares más exigentes.</p><p>Nuestros servicios generales incluyen:</p><ul><li>Reforzamiento estructural: Aseguramos la resistencia y durabilidad de tus edificaciones.</li><li>Mantenimiento y reparaciones: Conservamos tus espacios en óptimas condiciones.</li><li>Instalaciones técnicas: Diseño y ejecución de sistemas eléctricos, hidráulicos y más.</li><li>Remodelaciones y adecuaciones: Transformamos espacios para adaptarlos a tus necesidades.</li></ul>',
    slogan: 'Diseñamos espacios que se adapten a tus necesidades',
    image: Service4
  },
  {
    id: 5,  
    name: 'Declaratoria de Fábrica e Independización',
    description: '<p>Gestionamos de manera integral todo el proceso de Declaratoria de Fábrica, asegurando que tus instalaciones cumplan con los requisitos legales y técnicos necesarios para su funcionamiento. Desde la evaluación inicial hasta la obtención de la autorización oficial, nos encargamos de cada paso, optimizando el tiempo y los recursos de tu empresa.</p><p>En ARQUIZO, te ofrecemos el respaldo necesario para garantizar que tu planta opere conforme a las normativas vigentes, asegurando su legalidad y eficiencia operativa.</p>',
    slogan: 'Diseñamos interfaces que se adapten a tus necesidades',
    image: Service5
  },
  {
    id: 6,  
    name: 'Ejecución de obras',
    description: '<p>Lideramos la ejecución de obras con un enfoque integral, asegurando que cada proyecto se complete dentro de los plazos establecidos, respetando el presupuesto y cumpliendo con los más altos estándares de calidad. Nuestro equipo de profesionales coordina todos los aspectos de la obra, desde la planificación hasta la entrega final, garantizando resultados óptimos.</p><p>En ARQUIZO, trabajamos con la máxima eficiencia y detalle, controlando cada fase de la obra para asegurar la calidad, la seguridad y el cumplimiento normativo.</p>',
    slogan: 'Calidad y precisión en cada proyecto',  
    image: Service6
  },
  {
    id: 7,  
    name: 'Remodelaciones y renovaciones',
    description: '<p>Transformamos tus espacios a través de remodelaciones y renovaciones que combinan diseño, funcionalidad y estilo. Ya sea para actualizar una estructura existente, adaptar un espacio a nuevas necesidades o mejorar su estética, nuestro equipo de expertos se asegura de que cada detalle cumpla con tus expectativas.</p><p>En ARQUIZO, optimizamos tus espacios para maximizar su uso, incorporando las últimas tendencias y soluciones eficientes. Nos encargamos de todo el proceso, asegurando que la renovación se realice de manera rápida, segura y sin contratiempos.</p>',
    slogan: 'Calidad y precisión en cada proyecto',  
    image: Service7,
    fullWidth: true
  },
  {
    id: 8,  
    name: 'Licencia de Funcionamiento',
    description: '<p>Gestionamos todo el proceso para la obtención de tu Licencia de Funcionamiento, asegurando que tu empresa cumpla con las normativas locales y pueda operar de manera legal y segura. Desde la recopilación de documentación hasta la presentación de solicitudes, nuestro equipo se encarga de cada detalle para que puedas enfocarte en lo que realmente importa.</p><p>En ARQUIZO, te ofrecemos asesoría y acompañamiento en cada paso del trámite, garantizando que el proceso sea ágil, eficiente y sin inconvenientes.</p>',
    slogan: 'Trámites ágiles y seguros',  
    image: Service8,
  },
  {
    id: 9,  
    name: 'Paisajismo',
    description: '<p>Diseñamos y ejecutamos proyectos de paisajismo que transforman el entorno y crean ambientes armónicos entre la naturaleza y el diseño. Ya sea para jardines, terrazas, áreas comerciales o espacios corporativos, nuestro equipo de expertos crea soluciones personalizadas que reflejan belleza, funcionalidad y sostenibilidad.</p><p>En ARQUIZO, utilizamos plantas, materiales y técnicas innovadoras para optimizar los espacios exteriores, mejorar la calidad ambiental y generar experiencias únicas.</p>',
    slogan: 'Creando espacios naturales que inspiran',  
    image: Service9,
  },
  {
    id: 10,  
    name: 'Diseño de Edificios inteligentes',
    description: '<p>Creamos edificios inteligentes que integran tecnología avanzada para mejorar la eficiencia energética, la seguridad y el confort. En ARQUIZO, combinamos diseño arquitectónico con sistemas automatizados para optimizar el rendimiento y la sostenibilidad de tus proyectos.</p>',
    slogan: 'Eficiencia y tecnología en cada espacio', 
    image: Service10,
  }  
]