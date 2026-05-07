import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Propuesta from '../components/Propuesta/Propuesta'
import SeccionReseñas from '../components/Cards/SeccionReseñas'
import Footer from '../components/Footer/Footer'
import galletasImg from '../assets/images/galletaseeveevolutions.png'
import Slider from '../components/Slider/Slider'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Propuesta
          titulo="Creaciones únicas inspiradas en cada Eeveelución."
          descripcion="Cada bebida y bocado de nuestro menú nació de la magia de las Eeveevoluciones. Sabores cuidadosamente diseñados para que cada visita sea una experiencia distinta. Porque elegir es la mejor parte."
          imagen={galletasImg}
          estrellas={3}
        />
        <SeccionReseñas />
        <Slider />  
      </main>
      <Footer />
    </>
  )
}

export default Home